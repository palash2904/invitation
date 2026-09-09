import { Component, inject, signal, HostListener, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-mobile-quick-actions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="mobile-action-bar" [class.hidden]="isHidden()" role="navigation" aria-label="Mobile quick actions">
      <div class="action-pill-container luxury-card">
        <!-- 1. Map Directions Button -->
        <a 
          [href]="couple().venueMapUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="action-item"
          aria-label="Open venue location in Google Maps"
        >
          <div class="action-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="action-svg">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <span class="action-label">{{ isHindi() ? 'विवाह स्थल' : 'Location' }}</span>
        </a>

        <div class="action-divider" aria-hidden="true"></div>

        <!-- 2. Save Date to Calendar -->
        <a 
          [href]="calendarUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="action-item"
          aria-label="Add wedding to Google Calendar"
        >
          <div class="action-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="action-svg">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <span class="action-label">{{ isHindi() ? 'कैलेंडर' : 'Calendar' }}</span>
        </a>

        <div class="action-divider" aria-hidden="true"></div>

        <!-- 3. Send Wishes / WhatsApp -->
        <a 
          [href]="whatsappWishesUrl()" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="action-item highlight-action"
          aria-label="Send congratulations via WhatsApp"
        >
          <div class="action-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="action-svg">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <span class="action-label">{{ isHindi() ? 'बधाई' : 'Wishes' }}</span>
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .mobile-action-bar {
      position: fixed;
      bottom: max(1rem, env(safe-area-inset-bottom, 1rem));
      left: 0;
      right: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9998;
      pointer-events: none;
      padding: 0 1rem;
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
    }

    .mobile-action-bar.hidden {
      transform: translateY(120%);
      opacity: 0;
      pointer-events: none;
    }

    .action-pill-container {
      pointer-events: auto;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 6px 10px;
      background: rgba(253, 251, 247, 0.94);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1.5px solid rgba(197, 160, 89, 0.55);
      border-radius: 9999px;
      box-shadow: 0 12px 35px -6px rgba(44, 36, 32, 0.22), 0 4px 12px rgba(197, 160, 89, 0.3);
      max-width: 380px;
      width: auto;
    }

    .action-item {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 9999px;
      color: #2E2520;
      text-decoration: none;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      -webkit-tap-highlight-color: transparent;
      user-select: none;
    }

    .action-item:active {
      transform: scale(0.92);
      background: rgba(197, 160, 89, 0.15);
    }

    .action-item.highlight-action {
      background: linear-gradient(135deg, #F3D99F 0%, #C5A059 100%);
      color: #1A130C;
      font-weight: 700;
      box-shadow: 0 2px 8px rgba(197, 160, 89, 0.4);
    }

    .action-item.highlight-action:active {
      transform: scale(0.92);
    }

    .action-icon-wrap {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .action-svg {
      width: 100%;
      height: 100%;
    }

    .action-label {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      white-space: nowrap;
    }

    .action-divider {
      width: 1px;
      height: 18px;
      background: rgba(197, 160, 89, 0.35);
      margin: 0 2px;
    }

    /* Show primarily on tablet & mobile */
    @media (min-width: 860px) {
      .mobile-action-bar {
        display: none;
      }
    }

    @media (max-width: 380px) {
      .action-item {
        padding: 6px 10px;
        gap: 4px;
      }

      .action-label {
        font-size: 0.74rem;
      }

      .action-icon-wrap {
        width: 14px;
        height: 14px;
      }
    }
  `]
})
export class MobileQuickActionsComponent implements OnInit, OnDestroy {
  private translationService = inject(TranslationService);
  private platformId = inject(PLATFORM_ID);

  public readonly isHindi = this.translationService.isHindi;
  public readonly couple = this.translationService.couple;
  public readonly guestName = this.translationService.guestName;

  public isHidden = signal<boolean>(false);
  private lastScrollY = 0;

  public readonly calendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Palash+%26+Sonam+Wedding&dates=20261130T043000Z/20261201T183000Z&details=Wedding+Celebrations+of+Palash+and+Sonam+at+Mahaveer+Bagh,+Indore&location=Mahaveer+Bagh,+Airport+Road,+Indore';

  public whatsappWishesUrl(): string {
    const guest = this.guestName() ? ` from ${encodeURIComponent(this.guestName()!)}` : '';
    const msg = this.isHindi()
      ? `पलाश और सोनम, आप दोनों को विवाह की हार्दिक शुभकामनाएं! ✨🎉${guest}`
      : `Dear Palash & Sonam, Heartiest congratulations on your wedding! Looking forward to celebrating with you! ✨🎉${guest}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.lastScrollY = window.scrollY;
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window === 'undefined') return;
    const currentScrollY = window.scrollY;
    
    // Hide bar when at the very top hero header to keep it clean, show when scrolled past 250px
    if (currentScrollY < 180) {
      this.isHidden.set(true);
    } else {
      this.isHidden.set(false);
    }
    this.lastScrollY = currentScrollY;
  }

  ngOnDestroy(): void {}
}
