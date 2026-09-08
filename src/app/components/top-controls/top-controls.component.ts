import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { AudioService } from '../../services/audio.service';
import { InviteType } from '../../models/wedding-event.model';

@Component({
  selector: 'app-top-controls',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <header class="top-nav-bar" role="banner">
      <div class="controls-container">
        <!-- Left: Language Switcher EN | हिंदी -->
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

        <!-- Right: Action Buttons (Share Invites + Music Toggle) -->
        <div class="right-controls-group">
          <!-- Quick Share Links Button -->
          <button 
            type="button"
            class="share-btn"
            (click)="openShareModal()"
            title="Generate & Copy WhatsApp Invitation Links"
            aria-label="Open invitation share modal"
            id="share-modal-btn"
          >
            <span class="share-icon" aria-hidden="true">💌</span>
            <span class="share-label-full">
              {{ translationService.isHindi() ? 'निमंत्रण लिंक' : 'Share Invites' }}
            </span>
            <span class="share-label-short">
              {{ translationService.isHindi() ? 'शेयर' : 'Share' }}
            </span>
          </button>

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
            
            <span class="music-label-full">
              {{ audioService.isPlaying() ? t().controls.musicOn : t().controls.musicOff }}
            </span>
            <span class="music-label-short">
              {{ audioService.isPlaying() ? (translationService.isHindi() ? 'चालू' : 'ON') : (translationService.isHindi() ? 'बंद' : 'OFF') }}
            </span>

            <!-- Animated equalizer waves when playing -->
            <div *ngIf="audioService.isPlaying()" class="equalizer-bars" aria-hidden="true">
              <span class="bar bar-1"></span>
              <span class="bar bar-2"></span>
              <span class="bar bar-3"></span>
            </div>
          </button>
        </div>
      </div>
    </header>

    <!-- Share Invites Luxury Modal -->
    <div *ngIf="isModalOpen()" class="share-modal-backdrop" (click)="closeShareModal()">
      <div class="share-modal-card luxury-card" (click)="$event.stopPropagation()">
        <!-- Close Button -->
        <button type="button" class="modal-close-btn" (click)="closeShareModal()" aria-label="Close modal">✕</button>

        <div class="modal-header">
          <span class="modal-badge">🪔 {{ translationService.isHindi() ? 'कस्टम निमंत्रण शेयर करें' : 'Custom Guest Invitations' }} 🪔</span>
          <h3 class="modal-title">
            {{ translationService.isHindi() ? 'मेहमानों के लिए निमंत्रण लिंक' : 'Share Wedding Invites' }}
          </h3>
          <p class="modal-subtitle">
            {{ translationService.isHindi() ? 'नीचे से श्रेणी चुनें, मेहमान का नाम डालें और एक क्लिक में WhatsApp मैसेज कॉपी करें:' : 'Select an invite type, add optional guest name, and copy the ready-to-send WhatsApp invite:' }}
          </p>
        </div>

        <!-- Optional Guest Name Input -->
        <div class="guest-input-box">
          <label class="input-label" for="guestNameInput">
            👤 {{ translationService.isHindi() ? 'मेहमान का नाम (वैकल्पिक)' : 'Guest / Family Name (Optional)' }}:
          </label>
          <div class="input-wrapper">
            <input 
              id="guestNameInput"
              type="text" 
              [(ngModel)]="customGuestName" 
              placeholder="e.g. Sharma Family / Rahul Ji" 
              class="custom-guest-input"
            />
          </div>
        </div>

        <!-- 3 Distinct Invite Types List -->
        <div class="invite-types-grid">
          <!-- 1. Reception Only -->
          <div class="invite-type-card" [class.selected]="translationService.inviteType() === 'reception'">
            <div class="card-header-row">
              <div class="card-badge reception">🍽️ 1. Reception Only</div>
              <button type="button" class="preview-switch-btn" (click)="switchInviteType('reception')">
                {{ translationService.inviteType() === 'reception' ? '✓ Viewing' : 'Preview' }}
              </button>
            </div>
            <p class="type-desc">
              <strong>1 December (7:00 PM onwards)</strong>: Only Reception & Dinner feast. Daytime events hidden.
            </p>
            <div class="action-row">
              <button type="button" class="copy-btn btn-royal" (click)="copyInviteMessage('reception')">
                <span>{{ copiedType() === 'reception' ? '✓ Copied!' : '📋 Copy WhatsApp Invite' }}</span>
              </button>
            </div>
          </div>

          <!-- 2. 1 December Only -->
          <div class="invite-type-card" [class.selected]="translationService.inviteType() === 'dec1'">
            <div class="card-header-row">
              <div class="card-badge dec1">💍 2. 1 December Only</div>
              <button type="button" class="preview-switch-btn" (click)="switchInviteType('dec1')">
                {{ translationService.inviteType() === 'dec1' ? '✓ Viewing' : 'Preview' }}
              </button>
            </div>
            <p class="type-desc">
              <strong>1 December All Events</strong>: Engagement (10:30 AM), Haldi (1 PM), Var Nikasi (6 PM), Reception (7 PM).
            </p>
            <div class="action-row">
              <button type="button" class="copy-btn btn-royal" (click)="copyInviteMessage('dec1')">
                <span>{{ copiedType() === 'dec1' ? '✓ Copied!' : '📋 Copy WhatsApp Invite' }}</span>
              </button>
            </div>
          </div>

          <!-- 3. Both Days -->
          <div class="invite-type-card" [class.selected]="translationService.inviteType() === 'both'">
            <div class="card-header-row">
              <div class="card-badge both">❤️ 3. Both Days (Complete)</div>
              <button type="button" class="preview-switch-btn" (click)="switchInviteType('both')">
                {{ translationService.inviteType() === 'both' ? '✓ Viewing' : 'Preview' }}
              </button>
            </div>
            <p class="type-desc">
              <strong>30 Nov & 1 Dec</strong>: Complete schedule with Mata Poojan, Mamera, Sangeet, Haldi, Baraat & Reception.
            </p>
            <div class="action-row">
              <button type="button" class="copy-btn btn-royal" (click)="copyInviteMessage('both')">
                <span>{{ copiedType() === 'both' ? '✓ Copied!' : '📋 Copy WhatsApp Invite' }}</span>
              </button>
            </div>
          </div>
        </div>

        <div *ngIf="copyFeedback()" class="copy-toast">
          ✨ {{ copyFeedback() }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 100vw;
      z-index: 99999;
      pointer-events: none;
      box-sizing: border-box;
      overflow: hidden;
    }

    .top-nav-bar {
      position: fixed;
      top: max(0.85rem, env(safe-area-inset-top, 0.85rem));
      left: 0;
      right: 0;
      width: 100%;
      max-width: 100vw;
      box-sizing: border-box;
      z-index: 99999;
      pointer-events: none;
      padding: 0 max(1.25rem, env(safe-area-inset-right, 1.25rem)) 0 max(1.25rem, env(safe-area-inset-left, 1.25rem));
      transition: all 0.3s ease;
    }

    .controls-container {
      max-width: 1240px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      box-sizing: border-box;
    }

    .right-controls-group {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .lang-switch-wrapper,
    .share-btn,
    .music-btn {
      pointer-events: auto;
      background: rgba(253, 251, 247, 0.94);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1.5px solid rgba(197, 160, 89, 0.55);
      border-radius: 9999px;
      box-shadow: 0 8px 30px -4px rgba(44, 36, 32, 0.18), 0 2px 8px rgba(197, 160, 89, 0.25);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      box-sizing: border-box;
    }

    .share-label-full,
    .music-label-full {
      display: inline;
    }

    .share-label-short,
    .music-label-short {
      display: none;
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

    .share-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      min-height: 44px;
      color: #7A192B;
      font-size: 0.9rem;
      font-weight: 600;
      border-color: rgba(122, 25, 43, 0.35);
    }

    .share-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 28px -4px rgba(122, 25, 43, 0.28);
      border-color: #7A192B;
      background: #FFFFFF;
    }

    .share-icon {
      font-size: 1.1rem;
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
      box-shadow: 0 12px 28px -4px rgba(197, 160, 89, 0.4);
      border-color: rgba(197, 160, 89, 0.85);
    }

    .music-btn.playing {
      background: rgba(255, 255, 255, 0.97);
      border-color: #C5A059;
      box-shadow: 0 8px 24px -4px rgba(197, 160, 89, 0.35), 0 0 14px rgba(243, 217, 159, 0.5);
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

    /* Modal Backdrop & Card */
    .share-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 100000;
      background: rgba(26, 18, 14, 0.7);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.25rem;
      animation: fadeIn 0.3s ease;
      pointer-events: auto;
    }

    .share-modal-card {
      background: #FFFFFF;
      max-width: 680px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      padding: 2.5rem 2rem;
      border-radius: 28px;
      border: 2px solid #C5A059;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
      position: relative;
    }

    .modal-close-btn {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.06);
      color: #6E6259;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .modal-close-btn:hover {
      background: #7A192B;
      color: #FFFFFF;
    }

    .modal-header {
      text-align: center;
      margin-bottom: 1.75rem;
    }

    .modal-badge {
      font-size: 0.8rem;
      font-weight: 700;
      color: #7A192B;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    .modal-title {
      font-size: 1.9rem;
      color: #7A192B;
      font-weight: 700;
      margin-bottom: 0.4rem;
    }

    .modal-subtitle {
      font-size: 0.95rem;
      color: #6E6259;
      line-height: 1.5;
    }

    .guest-input-box {
      margin-bottom: 1.5rem;
      background: #FAF6EF;
      padding: 1rem 1.25rem;
      border-radius: 16px;
      border: 1px solid rgba(197, 160, 89, 0.4);
    }

    .input-label {
      font-size: 0.88rem;
      font-weight: 600;
      color: #2E2520;
      display: block;
      margin-bottom: 0.4rem;
    }

    .custom-guest-input {
      width: 100%;
      padding: 10px 14px;
      border-radius: 10px;
      border: 1.5px solid #C5A059;
      font-family: inherit;
      font-size: 0.95rem;
      outline: none;
      background: #FFFFFF;
    }

    .custom-guest-input:focus {
      border-color: #7A192B;
      box-shadow: 0 0 0 3px rgba(122, 25, 43, 0.12);
    }

    .invite-types-grid {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .invite-type-card {
      padding: 1.25rem;
      border: 1.5px solid rgba(197, 160, 89, 0.4);
      border-radius: 16px;
      background: #FFFFFF;
      transition: all 0.3s ease;
    }

    .invite-type-card.selected {
      border-color: #7A192B;
      background: rgba(247, 241, 230, 0.4);
      box-shadow: 0 4px 14px rgba(122, 25, 43, 0.1);
    }

    .card-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .card-badge {
      font-weight: 700;
      font-size: 1rem;
      color: #2E2520;
    }

    .card-badge.reception { color: #9E263E; }
    .card-badge.dec1 { color: #8A5E12; }
    .card-badge.both { color: #7A192B; }

    .preview-switch-btn {
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 600;
      background: #FAF4EB;
      border: 1px solid #C5A059;
      color: #7A192B;
      transition: all 0.25s ease;
    }

    .preview-switch-btn:hover {
      background: #C5A059;
      color: #FFFFFF;
    }

    .type-desc {
      font-size: 0.88rem;
      color: #5C4E47;
      margin-bottom: 0.85rem;
      line-height: 1.4;
    }

    .action-row {
      display: flex;
      justify-content: flex-end;
    }

    .copy-btn {
      padding: 10px 20px;
      font-size: 0.88rem;
      min-height: 40px;
    }

    .copy-toast {
      margin-top: 1.25rem;
      padding: 10px 16px;
      background: #1A130C;
      color: #F3D99F;
      border-radius: 12px;
      text-align: center;
      font-size: 0.9rem;
      font-weight: 600;
      animation: fadeIn 0.2s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }

    /* Mobile Responsive - Floating Buttons */
    @media (max-width: 640px) {
      .top-nav-bar {
        top: max(0.5rem, env(safe-area-inset-top, 0.5rem));
        padding: 0 max(0.4rem, env(safe-area-inset-right, 0.4rem)) 0 max(0.4rem, env(safe-area-inset-left, 0.4rem));
      }

      .controls-container {
        justify-content: space-between;
        gap: 6px;
      }

      .lang-switch-wrapper {
        padding: 2px 4px;
        min-height: 36px;
        flex-shrink: 0;
      }

      .lang-btn {
        padding: 3px 7px;
        font-size: 0.76rem;
        min-height: 28px;
      }

      .right-controls-group {
        gap: 5px;
        flex-shrink: 0;
      }

      .share-btn,
      .music-btn {
        padding: 5px 9px;
        min-height: 36px;
        gap: 4px;
      }

      .share-label-full,
      .music-label-full {
        display: none !important;
      }

      .share-label-short,
      .music-label-short {
        display: inline !important;
        font-size: 0.76rem;
        font-weight: 600;
        white-space: nowrap;
      }

      .music-icon-wrapper {
        width: 16px;
        height: 16px;
      }

      .equalizer-bars {
        gap: 2px;
        height: 11px;
      }

      .equalizer-bars .bar {
        width: 2px;
      }

      .share-modal-backdrop {
        padding: 0.75rem;
      }

      .share-modal-card {
        padding: 1.5rem 1rem;
        border-radius: 20px;
        max-height: 88vh;
      }

      .modal-title {
        font-size: 1.35rem;
      }

      .modal-subtitle {
        font-size: 0.85rem;
      }

      .invite-type-card {
        padding: 0.9rem;
      }

      .card-badge {
        font-size: 0.9rem;
      }

      .type-desc {
        font-size: 0.82rem;
      }

      .copy-btn {
        width: 100%;
        padding: 8px 12px;
        font-size: 0.82rem;
        min-height: 36px;
      }
    }

    @media (max-width: 360px) {
      .top-nav-bar {
        top: max(0.35rem, env(safe-area-inset-top, 0.35rem));
        padding: 0 0.25rem;
      }

      .controls-container {
        gap: 3px;
      }

      .right-controls-group {
        gap: 3px;
      }

      .lang-switch-wrapper {
        padding: 1px 2px;
        min-height: 32px;
      }

      .lang-btn {
        padding: 2px 5px;
        font-size: 0.7rem;
        min-height: 24px;
      }

      .share-btn,
      .music-btn {
        padding: 4px 6px;
        min-height: 32px;
        gap: 3px;
      }

      .share-label-short,
      .music-label-short {
        font-size: 0.7rem;
      }

      .equalizer-bars {
        display: none;
      }
    }
  `]
})
export class TopControlsComponent {
  public readonly translationService = inject(TranslationService);
  public readonly audioService = inject(AudioService);

  public readonly t = this.translationService.t;
  
  public readonly isModalOpen = signal<boolean>(false);
  public readonly copiedType = signal<InviteType | null>(null);
  public readonly copyFeedback = signal<string | null>(null);
  public customGuestName = '';

  public toggleMusic(): void {
    this.audioService.toggle();
  }

  public openShareModal(): void {
    this.isModalOpen.set(true);
  }

  public closeShareModal(): void {
    this.isModalOpen.set(false);
    this.copyFeedback.set(null);
  }

  public switchInviteType(type: InviteType): void {
    this.translationService.setInviteType(type);
  }

  public copyInviteMessage(type: InviteType): void {
    if (typeof window === 'undefined') return;

    const baseUrl = window.location.origin + window.location.pathname;
    const isHi = this.translationService.isHindi();
    const guestParam = this.customGuestName.trim() ? `&guest=${encodeURIComponent(this.customGuestName.trim())}` : '';
    const guestGreeting = this.customGuestName.trim() 
      ? (isHi ? `सादर आमंत्रण: *${this.customGuestName.trim()}*\n\n` : `Cordially Invited: *${this.customGuestName.trim()}*\n\n`)
      : '';

    let inviteUrl = '';
    let messageText = '';

    if (type === 'reception') {
      inviteUrl = `${baseUrl}?invite=reception${guestParam}`;
      messageText = isHi 
        ? `✨ *शाही प्रीतिभोज निमंत्रण* ✨\n\n${guestGreeting}*पलाश एवं सोनम* के शुभ विवाह के पावन अवसर पर आयोजित *शाही प्रीतिभोज (रिसेप्शन)* में आप सपरिवार सादर आमंत्रित हैं।\n\n📅 *तिथि:* मंगलवार, १ दिसंबर २०२६\n🕖 *समय:* सायं ०७:०० बजे से\n📍 *स्थान:* उदयपुर, राजस्थान\n\n💌 *डिजिटल निमंत्रण कार्ड देखें:* \n${inviteUrl}`
        : `✨ *Wedding Reception Invitation* ✨\n\n${guestGreeting}Together with their families, *Palash & Sonam* cordially invite you to celebrate their *Royal Wedding Reception & Dinner*!\n\n📅 *Date:* Tuesday, 1 December 2026\n🕖 *Time:* 7:00 PM onwards\n📍 *Venue:* Udaipur, Rajasthan\n\n💌 *View Interactive Invitation:* \n${inviteUrl}`;
    } else if (type === 'dec1') {
      inviteUrl = `${baseUrl}?invite=dec1${guestParam}`;
      messageText = isHi 
        ? `✨ *शुभ विवाह निमंत्रण* ✨\n\n${guestGreeting}*पलाश एवं सोनम* के शुभ विवाह समारोह में आप सपरिवार सादर आमंत्रित हैं।\n\n📅 *दिनांक:* मंगलवार, १ दिसंबर २०२६\n\n🌸 *मांगलिक कार्यक्रम:* \n• प्रातः १०:३० बजे — सगाई समारोह (रिंग सेरेमनी)\n• दोपहर ०१:०० बजे — हल्दी उत्सव\n• सायं ०६:०० बजे — वर निकासी (शाही बारात)\n• सायं ०७:०० बजे से — प्रीतिभोज (शाही दावत)\n\n📍 *स्थान:* उदयपुर, राजस्थान\n\n💌 *डिजिटल निमंत्रण कार्ड देखें:* \n${inviteUrl}`
        : `✨ *Wedding Invitation* ✨\n\n${guestGreeting}Together with their families, *Palash & Sonam* invite you to celebrate their auspicious wedding ceremonies on *Tuesday, 1 December 2026*!\n\n📅 *Schedule:* \n• 10:30 AM — Engagement Ceremony\n• 1:00 PM — Haldi Ceremony\n• 6:00 PM — Var Nikasi (Royal Baraat)\n• 7:00 PM onwards — Reception & Dinner Feast\n\n📍 *Venue:* Udaipur, Rajasthan\n\n💌 *View Interactive Invitation:* \n${inviteUrl}`;
    } else {
      inviteUrl = `${baseUrl}${guestParam ? `?invite=both${guestParam}` : ''}`;
      messageText = isHi 
        ? `✨ *मांगलिक विवाह निमंत्रण* ✨\n\n${guestGreeting}*पलाश एवं सोनम* के शुभ विवाह के दो दिवसीय पावन उत्सव में आप सपरिवार सादर आमंत्रित हैं।\n\n🌸 *सोमवार, ३० नवंबर २०२६:* \n• प्रातः १०:०० बजे — माता पूजन\n• दोपहर ०१:०० बजे — मामेरा (भात)\n• सायं ०७:०० बजे — महिला संगीत\n\n🌸 *मंगलवार, १ दिसंबर २०२६:* \n• प्रातः १०:३० बजे — सगाई समारोह\n• दोपहर ०१:०० बजे — हल्दी उत्सव\n• सायं ०६:०० बजे — वर निकासी\n• सायं ०७:०० बजे से — प्रीतिभोज\n\n📍 *स्थान:* उदयपुर, राजस्थान\n\n💌 *डिजिटल निमंत्रण कार्ड देखें:* \n${inviteUrl}`
        : `✨ *Royal Wedding Invitation* ✨\n\n${guestGreeting}Together with their families, *Palash & Sonam* invite you to celebrate their two-day wedding festivities!\n\n🌸 *Monday, 30 November 2026:* \n• 10:00 AM — Mata Poojan\n• 1:00 PM — Mamera\n• 7:00 PM — Mahela Sangeet\n\n🌸 *Tuesday, 1 December 2026:* \n• 10:30 AM — Engagement Ceremony\n• 1:00 PM — Haldi Celebration\n• 6:00 PM — Var Nikasi (Baraat)\n• 7:00 PM onwards — Reception / Dinner\n\n📍 *Venue:* Udaipur, Rajasthan\n\n💌 *View Interactive Invitation:* \n${inviteUrl}`;
    }

    navigator.clipboard.writeText(messageText).then(() => {
      this.copiedType.set(type);
      this.copyFeedback.set(`Copied WhatsApp Invite for ${type === 'reception' ? 'Reception Only' : type === 'dec1' ? '1 Dec Only' : 'Both Days'}!`);
      setTimeout(() => {
        this.copiedType.set(null);
      }, 3000);
    });
  }
}
