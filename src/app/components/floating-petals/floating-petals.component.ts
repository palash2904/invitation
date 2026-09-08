import { Component, ElementRef, OnInit, OnDestroy, ViewChild, inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: 'rose' | 'marigold';
}

@Component({
  selector: 'app-floating-petals',
  standalone: true,
  template: `
    <canvas #petalCanvas class="petal-canvas" aria-hidden="true"></canvas>
  `,
  styles: [`
    :host {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
      overflow: hidden;
    }
    .petal-canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `]
})
export class FloatingPetalsComponent implements OnInit, OnDestroy {
  @ViewChild('petalCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrameId: number | null = null;
  private petals: Petal[] = [];
  private resizeObserver: ResizeObserver | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Check prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.initCanvas();
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.resizeCanvas();
    this.createPetals();

    this.ngZone.runOutsideAngular(() => {
      this.animate();
      window.addEventListener('resize', this.onResize);
    });
  }

  private onResize = () => {
    this.resizeCanvas();
  };

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }
  }

  private createPetals(): void {
    const canvas = this.canvasRef.nativeElement;
    const count = Math.min(22, Math.max(10, Math.floor(canvas.width / 70)));
    this.petals = [];

    const colors = [
      'rgba(235, 140, 155, ', // Rose pink
      'rgba(242, 175, 185, ', // Soft blush
      'rgba(245, 166, 35, ',  // Marigold golden orange
      'rgba(248, 203, 70, ',  // Marigold yellow
    ];

    for (let i = 0; i < count; i++) {
      this.petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 8,
        speedX: (Math.random() - 0.5) * 0.8 + 0.3,
        speedY: Math.random() * 0.9 + 0.6,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.45 + 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.5 ? 'rose' : 'marigold'
      });
    }
  }

  private animate = () => {
    if (!this.ctx) return;
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const petal of this.petals) {
      petal.x += petal.speedX + Math.sin(petal.y * 0.008) * 0.4;
      petal.y += petal.speedY;
      petal.rotation += petal.rotationSpeed;

      if (petal.y > canvas.height + 20) {
        petal.y = -20;
        petal.x = Math.random() * canvas.width;
      }
      if (petal.x > canvas.width + 20) {
        petal.x = -20;
      } else if (petal.x < -20) {
        petal.x = canvas.width + 20;
      }

      this.drawPetal(petal);
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  private drawPetal(petal: Petal): void {
    if (!this.ctx) return;
    this.ctx.save();
    this.ctx.translate(petal.x, petal.y);
    this.ctx.rotate(petal.rotation);

    this.ctx.fillStyle = `${petal.color}${petal.opacity})`;
    this.ctx.beginPath();

    if (petal.type === 'rose') {
      // Elegant curved rose petal shape
      this.ctx.moveTo(0, -petal.size);
      this.ctx.bezierCurveTo(petal.size * 0.7, -petal.size * 0.7, petal.size * 0.9, petal.size * 0.4, 0, petal.size);
      this.ctx.bezierCurveTo(-petal.size * 0.9, petal.size * 0.4, -petal.size * 0.7, -petal.size * 0.7, 0, -petal.size);
    } else {
      // Rounded marigold petal shape
      this.ctx.ellipse(0, 0, petal.size * 0.6, petal.size * 0.9, 0, 0, Math.PI * 2);
    }

    this.ctx.fill();
    this.ctx.restore();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
    }
  }
}
