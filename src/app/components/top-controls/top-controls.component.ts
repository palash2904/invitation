import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-top-controls',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="top-nav-bar" role="banner">
      <div class="controls-container">
        <!-- Language Switcher EN | हिंदी -->
        <div class="lang-switch-wrapper" role="group" aria-label="Language selection">
          <button 
            type="button"
            class="lang-btn"
            [class.active]="translationService.currentLang() === 'en'"
            (click)="translationService.setLanguage('en')"
            aria-label="Switch to English"
            id="lang-btn-en"
          >
            EN
          </button>
          <span class="lang-divider" aria-hidden="true">|</span>
          <button 
            type="button"
            class="lang-btn hindi-text"
            [class.active]="translationService.currentLang() === 'hi'"
            (click)="translationService.setLanguage('hi')"
            aria-label="हिंदी भाषा चुनें"
            id="lang-btn-hi"
          >
            हिंदी
          </button>
        </div>

        <!-- Music Toggle -->
        <button 
          type="button"
          class="music-btn"
          [class.playing]="audioService.isPlaying()"
          (click)="toggleMusic()"
          [attr.aria-label]="audioService.isPlaying() ? 'Pause background wedding music' : 'Play background wedding music'"
          id="music-toggle-btn"
        >
          <div class="music-icon-wrapper" aria-hidden="true">
            <svg *ngIf="audioService.isPlaying()" class="sound-wave-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
            <svg *ngIf="!audioService.isPlaying()" class="mute-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          </div>
          
          <span class="music-label">
            {{ audioService.isPlaying() ? t().controls.musicOn : t().controls.musicOff }}
          </span>

          <!-- Animated equalizer waves when playing -->
          <div *ngIf="audioService.isPlaying()" class="equalizer-bars" aria-hidden="true">
            <span class="bar bar-1"></span>
            <span class="bar bar-2"></span>
            <span class="bar bar-3"></span>
          </div>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .top-nav-bar {
      position: fixed;
      top: 1rem;
      left: 0;
      width: 100%;
      z-index: 100;
      pointer-events: none;
      padding: 0 1.25rem;
    }

    .controls-container {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .lang-switch-wrapper,
    .music-btn {
      pointer-events: auto;
      background: rgba(253, 251, 247, 0.88);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(197, 160, 89, 0.4);
      border-radius: 9999px;
      box-shadow: 0 8px 24px -4px rgba(44, 36, 32, 0.12), 0 2px 6px rgba(197, 160, 89, 0.15);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .lang-switch-wrapper {
      display: inline-flex;
      align-items: center;
      padding: 4px 6px;
      min-height: 44px;
    }

    .lang-btn {
      padding: 6px 14px;
      font-size: 0.88rem;
      font-weight: 500;
      color: #6E6259;
      border-radius: 9999px;
      transition: all 0.25s ease;
      min-height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .lang-btn.hindi-text {
      font-family: 'Noto Serif Devanagari', serif;
      font-weight: 600;
    }

    .lang-btn.active {
      background: linear-gradient(135deg, #F3D99F 0%, #C5A059 100%);
      color: #1A130C;
      font-weight: 700;
      box-shadow: 0 2px 8px rgba(197, 160, 89, 0.4);
    }

    .lang-divider {
      color: rgba(197, 160, 89, 0.5);
      margin: 0 2px;
      font-size: 0.85rem;
    }

    .music-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 18px;
      min-height: 44px;
      color: #2E2520;
      font-size: 0.9rem;
      font-weight: 600;
      font-family: inherit;
    }

    .music-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 28px -4px rgba(197, 160, 89, 0.35);
      border-color: rgba(197, 160, 89, 0.7);
    }

    .music-btn.playing {
      background: rgba(255, 255, 255, 0.94);
      border-color: #C5A059;
    }

    .music-icon-wrapper {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #C5A059;
    }

    .music-icon-wrapper svg {
      width: 100%;
      height: 100%;
    }

    .equalizer-bars {
      display: inline-flex;
      align-items: flex-end;
      gap: 3px;
      height: 14px;
      margin-left: 2px;
    }

    .equalizer-bars .bar {
      width: 3px;
      background: #C5A059;
      border-radius: 2px;
      animation: equalize 1s ease-in-out infinite alternate;
    }

    .equalizer-bars .bar-1 { height: 60%; animation-delay: 0.1s; }
    .equalizer-bars .bar-2 { height: 100%; animation-delay: 0.3s; }
    .equalizer-bars .bar-3 { height: 40%; animation-delay: 0.2s; }

    @keyframes equalize {
      0% { height: 25%; }
      100% { height: 100%; }
    }

    /* Mobile Responsive - Floating Buttons */
    @media (max-width: 640px) {
      .top-nav-bar {
        top: auto;
        bottom: 1.25rem;
        padding: 0 1rem;
      }

      .controls-container {
        justify-content: space-between;
      }

      .music-btn {
        padding: 10px 14px;
      }

      .music-label {
        font-size: 0.82rem;
      }
    }
  `]
})
export class TopControlsComponent {
  public readonly translationService = inject(TranslationService);
  public readonly audioService = inject(AudioService);

  public readonly t = this.translationService.t;

  public toggleMusic(): void {
    this.audioService.toggle();
  }
}
