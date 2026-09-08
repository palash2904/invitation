import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { AudioService } from '../../services/audio.service';
import { FloatingPetalsComponent } from '../floating-petals/floating-petals.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FloatingPetalsComponent],
  template: `
    <section class="hero-section" id="hero" aria-label="Wedding Hero">
      <!-- Background Subtle Glow & Elements -->
      <div class="hero-ambient-glow" aria-hidden="true"></div>
      <div class="hero-ambient-lights" aria-hidden="true"></div>
      
      <!-- Floating Petals Canvas Layer -->
      <app-floating-petals></app-floating-petals>

      <div class="hero-container">
        <!-- Main Ghibli Artwork Showcase Frame -->
        <div class="hero-artwork-col">
          <div class="artwork-arch-frame">
            <div class="arch-gold-trim" aria-hidden="true"></div>
            
            <picture class="hero-picture">
              <source srcset="assets/images/couple-ghibli.png" type="image/png">
              <img 
                src="assets/images/couple-ghibli.jpg" 
                [alt]="'Studio Ghibli style illustration of groom Palash and bride ' + brideName()" 
                class="hero-artwork-img"
                fetchpriority="high"
                loading="eager"
              />
            </picture>

            <!-- Warm cinematic vignette & lighting overlay -->
            <div class="artwork-cinematic-overlay" aria-hidden="true"></div>
            
            <!-- Soft Corner Ornaments -->
            <div class="corner-ornament top-left" aria-hidden="true"></div>
            <div class="corner-ornament top-right" aria-hidden="true"></div>
            <div class="corner-ornament bottom-left" aria-hidden="true"></div>
            <div class="corner-ornament bottom-right" aria-hidden="true"></div>
          </div>
        </div>

        <!-- Hero Typography & Call-To-Action -->
        <div class="hero-content-col">
          <div class="hero-badge">
            <span class="badge-diya" aria-hidden="true">🪔</span>
            <span class="badge-text">{{ t().hero.togetherWithFamilies }}</span>
            <span class="badge-diya" aria-hidden="true">🪔</span>
          </div>

          <div class="couple-names-wrapper">
            <h1 class="couple-name groom-name">
              {{ groomName() }}
            </h1>
            <div class="couple-ampersand-wrapper">
              <span class="golden-vines-left" aria-hidden="true"></span>
              <span class="ampersand">&</span>
              <span class="golden-vines-right" aria-hidden="true"></span>
            </div>
            <h1 class="couple-name bride-name">
              {{ brideName() }}
            </h1>
          </div>

          <div class="celebration-announcement">
            <p class="announcement-text">{{ t().hero.areGettingMarried }}</p>
            <div class="date-capsule">
              <svg class="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span class="wedding-dates-text">{{ weddingDates() }}</span>
            </div>
          </div>

          <!-- Primary CTA Button -->
          <div class="cta-action-area">
            <button 
              type="button" 
              class="btn-royal view-invitation-btn" 
              (click)="onViewInvitationClick()"
              id="hero-view-invite-btn"
            >
              <span>{{ t().hero.viewInvitationBtn }}</span>
              <svg class="arrow-down-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Down Indicator -->
      <a href="#welcome" class="scroll-down-indicator" (click)="smoothScrollTo($event, 'welcome')" aria-label="Scroll to invitation message">
        <span class="scroll-hint-text">{{ t().hero.scrollHint }}</span>
        <div class="scroll-mouse" aria-hidden="true">
          <div class="scroll-wheel"></div>
        </div>
      </a>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      min-height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5rem 1.5rem 4rem 1.5rem;
      background: radial-gradient(ellipse at center top, #FFF9F0 0%, #F8EFE3 55%, #EFE3D3 100%);
      overflow: hidden;
    }

    .hero-ambient-glow {
      position: absolute;
      top: -10%;
      left: 50%;
      transform: translateX(-50%);
      width: 70vw;
      height: 70vw;
      max-width: 900px;
      max-height: 900px;
      background: radial-gradient(circle, rgba(243, 217, 159, 0.45) 0%, rgba(224, 185, 115, 0.15) 50%, transparent 75%);
      pointer-events: none;
      z-index: 1;
      filter: blur(40px);
      animation: pulseGlow 8s ease-in-out infinite alternate;
    }

    .hero-ambient-lights {
      position: absolute;
      inset: 0;
      background-image: 
        radial-gradient(circle at 15% 20%, rgba(245, 166, 35, 0.12) 0%, transparent 25%),
        radial-gradient(circle at 85% 30%, rgba(235, 140, 155, 0.12) 0%, transparent 30%),
        radial-gradient(circle at 50% 85%, rgba(197, 160, 89, 0.15) 0%, transparent 40%);
      pointer-events: none;
      z-index: 1;
    }

    .hero-container {
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 3.5rem;
      align-items: center;
      position: relative;
      z-index: 3;
    }

    /* Artwork Column & Royal Arch Frame */
    .hero-artwork-col {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .artwork-arch-frame {
      position: relative;
      width: 100%;
      max-width: 580px;
      border-radius: 280px 280px 32px 32px;
      overflow: hidden;
      box-shadow: 
        0 24px 60px -12px rgba(80, 50, 20, 0.22),
        0 8px 24px -4px rgba(197, 160, 89, 0.25),
        inset 0 0 0 1px rgba(255, 255, 255, 0.8);
      border: 3px solid rgba(197, 160, 89, 0.55);
      background: #F8EFE3;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .artwork-arch-frame:hover {
      transform: translateY(-4px);
    }

    .hero-picture {
      display: block;
      width: 100%;
      height: 100%;
    }

    .hero-artwork-img {
      width: 100%;
      height: 100%;
      max-height: 600px;
      object-fit: cover;
      object-position: center top;
      display: block;
      transition: transform 1.2s ease;
    }

    .artwork-cinematic-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(243, 217, 159, 0.08) 0%, transparent 60%, rgba(46, 26, 15, 0.35) 100%);
      pointer-events: none;
    }

    /* Corner Ornaments */
    .corner-ornament {
      position: absolute;
      width: 24px;
      height: 24px;
      border-color: #D4AF37;
      border-style: solid;
      pointer-events: none;
      opacity: 0.85;
    }
    .corner-ornament.top-left { top: 16px; left: 16px; border-width: 2px 0 0 2px; }
    .corner-ornament.top-right { top: 16px; right: 16px; border-width: 2px 2px 0 0; }
    .corner-ornament.bottom-left { bottom: 16px; left: 16px; border-width: 0 0 2px 2px; }
    .corner-ornament.bottom-right { bottom: 16px; right: 16px; border-width: 0 2px 2px 0; }

    /* Hero Content Column */
    .hero-content-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1rem 0;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 22px;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(197, 160, 89, 0.4);
      border-radius: 9999px;
      box-shadow: 0 4px 16px rgba(197, 160, 89, 0.15);
      margin-bottom: 1.75rem;
    }

    .badge-diya {
      font-size: 1.1rem;
    }

    .badge-text {
      font-size: 0.95rem;
      font-weight: 600;
      color: #7A192B;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    /* Couple Names */
    .couple-names-wrapper {
      margin-bottom: 1.5rem;
      width: 100%;
    }

    .couple-name {
      font-size: clamp(2.8rem, 5.5vw, 4.4rem);
      font-weight: 600;
      color: #7A192B;
      letter-spacing: 0.03em;
      line-height: 1.1;
      text-shadow: 0 2px 4px rgba(122, 25, 43, 0.08);
    }

    .couple-ampersand-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin: 0.35rem 0;
    }

    .golden-vines-left,
    .golden-vines-right {
      flex: 1;
      max-width: 80px;
      height: 1px;
      background: linear-gradient(90deg, transparent, #C5A059);
    }
    .golden-vines-right {
      background: linear-gradient(90deg, #C5A059, transparent);
    }

    .ampersand {
      font-family: 'Alex Brush', cursive;
      font-size: 3.2rem;
      color: #C5A059;
      line-height: 0.9;
    }

    /* Announcement & Date Capsule */
    .celebration-announcement {
      margin-bottom: 2.5rem;
    }

    .announcement-text {
      font-size: clamp(1.1rem, 2vw, 1.35rem);
      color: #54463E;
      font-style: italic;
      margin-bottom: 0.9rem;
      font-weight: 400;
    }

    .date-capsule {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 24px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 241, 230, 0.9) 100%);
      border: 1px solid rgba(197, 160, 89, 0.45);
      border-radius: 9999px;
      box-shadow: 0 6px 20px -4px rgba(44, 36, 32, 0.08);
    }

    .calendar-icon {
      width: 18px;
      height: 18px;
      color: #C5A059;
    }

    .wedding-dates-text {
      font-size: 1.05rem;
      font-weight: 600;
      color: #2E2520;
      letter-spacing: 0.04em;
    }

    /* CTA Area */
    .cta-action-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .view-invitation-btn {
      font-size: 1.05rem;
      padding: 16px 40px;
      gap: 12px;
    }

    .arrow-down-icon {
      width: 20px;
      height: 20px;
      animation: floatGentle 2s ease-in-out infinite;
    }

    /* Scroll Down Indicator */
    .scroll-down-indicator {
      position: absolute;
      bottom: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      color: #7E7067;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      transition: all 0.3s ease;
      z-index: 4;
    }

    .scroll-down-indicator:hover {
      color: #7A192B;
      transform: translateY(2px);
    }

    .scroll-mouse {
      width: 22px;
      height: 34px;
      border: 2px solid #C5A059;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      padding-top: 5px;
    }

    .scroll-wheel {
      width: 3px;
      height: 6px;
      background: #7A192B;
      border-radius: 2px;
      animation: scrollWheel 1.8s ease-in-out infinite;
    }

    @keyframes scrollWheel {
      0% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(12px); }
    }

    /* Responsive Breakdown */
    @media (max-width: 1024px) {
      .hero-section {
        padding-top: 4.5rem;
        padding-bottom: 5rem;
      }

      .hero-container {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        text-align: center;
      }

      .hero-artwork-col {
        order: 1;
      }

      .hero-content-col {
        order: 2;
      }

      .artwork-arch-frame {
        max-width: 440px;
        border-radius: 220px 220px 24px 24px;
      }

      .hero-artwork-img {
        max-height: 480px;
      }

      .scroll-down-indicator {
        display: none; /* Hide to avoid overlapping floating buttons on mobile */
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 3.5rem 1rem 4.5rem 1rem;
      }

      .artwork-arch-frame {
        max-width: 320px;
        border-radius: 160px 160px 20px 20px;
      }

      .hero-artwork-img {
        max-height: 380px;
      }

      .couple-name {
        font-size: 2.4rem;
      }

      .ampersand {
        font-size: 2.5rem;
      }

      .badge-text {
        font-size: 0.82rem;
      }

      .view-invitation-btn {
        width: 100%;
        max-width: 290px;
        padding: 14px 28px;
      }
    }
  `]
})
export class HeroComponent {
  private translationService = inject(TranslationService);
  private audioService = inject(AudioService);

  public readonly t = this.translationService.t;
  public readonly groomName = this.translationService.groomName;
  public readonly brideName = this.translationService.brideName;
  public readonly weddingDates = this.translationService.weddingDates;

  public onViewInvitationClick(): void {
    // 1. Attempt to start background music
    this.audioService.play();

    // 2. Smoothly scroll to invitation welcome section
    const target = document.getElementById('welcome');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public smoothScrollTo(event: MouseEvent, elementId: string): void {
    event.preventDefault();
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
