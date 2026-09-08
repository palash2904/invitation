import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service';
import { InviteType } from '../../models/wedding-event.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="admin-page-container">
      <!-- Background Ambient Glow -->
      <div class="admin-bg-glow" aria-hidden="true"></div>

      <!-- 1. LOGIN SCREEN (When Unauthenticated) -->
      <div *ngIf="!authService.isAuthenticated()" class="auth-wrapper">
        <div class="auth-card luxury-card">
          <div class="auth-header">
            <span class="auth-badge">🪔 Royal Wedding 🪔</span>
            <h1 class="auth-title">Admin Portal</h1>
            <p class="auth-subtitle">Palash & Sonam Wedding Invitation Management</p>
          </div>

          <form (ngSubmit)="onLogin()" class="login-form">
            <div class="input-group">
              <label for="adminPassword" class="form-label">Enter Admin Password</label>
              <div class="password-field-wrapper">
                <input
                  id="adminPassword"
                  name="adminPassword"
                  [type]="showPassword() ? 'text' : 'password'"
                  [(ngModel)]="passwordInput"
                  placeholder="Enter passcode"
                  class="admin-input"
                  autofocus
                  autocomplete="current-password"
                />
                <button
                  type="button"
                  class="password-toggle-btn"
                  (click)="togglePasswordVisibility()"
                  [attr.aria-label]="showPassword() ? 'Hide password' : 'Show password'"
                >
                  {{ showPassword() ? '👁️' : '🔒' }}
                </button>
              </div>
            </div>

            <div *ngIf="errorMessage()" class="error-alert" role="alert">
              ⚠️ {{ errorMessage() }}
            </div>

            <button type="submit" class="btn-royal submit-btn">
              <span>Unlock Admin Portal ➔</span>
            </button>
          </form>

          <div class="auth-footer">
            <a routerLink="/" class="back-link">
              ← Return to Public Wedding Invitation
            </a>
          </div>
        </div>
      </div>

      <!-- 2. ADMIN INVITATION MANAGEMENT PANEL (When Authenticated) -->
      <div *ngIf="authService.isAuthenticated()" class="admin-panel-wrapper">
        <!-- Top Admin Bar -->
        <header class="admin-nav-bar">
          <div class="admin-nav-content">
            <div class="admin-brand">
              <span class="brand-badge">👑 Admin Panel</span>
              <h2 class="brand-title">Palash & Sonam Wedding</h2>
            </div>

            <div class="admin-nav-actions">
              <a routerLink="/" target="_blank" class="nav-btn view-site-btn">
                <span>👁️ View Public Invitation</span>
              </a>
              <button type="button" class="nav-btn logout-btn" (click)="onLogout()">
                <span>🚪 Logout</span>
              </button>
            </div>
          </div>
        </header>

        <!-- Main Content Area -->
        <main class="admin-content-container">
          <!-- Intro Card -->
          <div class="intro-card luxury-card">
            <div class="intro-text">
              <span class="intro-badge">💌 WhatsApp Link Generator</span>
              <h1 class="intro-title">Share Wedding Invites</h1>
              <p class="intro-desc">
                Generate personalized WhatsApp messages and direct invitation links for your guests with ceremony filters.
              </p>
            </div>

            <!-- Guest Name Customizer & Language Selector -->
            <div class="controls-toolbar">
              <div class="toolbar-item guest-input-item">
                <label for="guestInput" class="toolbar-label">
                  👤 Guest / Family Name (Optional):
                </label>
                <div class="guest-input-wrap">
                  <input
                    id="guestInput"
                    type="text"
                    [(ngModel)]="customGuestName"
                    placeholder="e.g. Sharma Family / Rahul Ji"
                    class="guest-text-input"
                  />
                  <button
                    *ngIf="customGuestName"
                    type="button"
                    class="clear-input-btn"
                    (click)="customGuestName = ''"
                    title="Clear name"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div class="toolbar-item lang-toggle-item">
                <label class="toolbar-label">
                  🌐 Message Language:
                </label>
                <div class="lang-pill-group">
                  <button
                    type="button"
                    class="lang-pill-btn"
                    [class.active]="messageLang() === 'en'"
                    (click)="messageLang.set('en')"
                  >
                    English
                  </button>
                  <button
                    type="button"
                    class="lang-pill-btn hindi-text"
                    [class.active]="messageLang() === 'hi'"
                    (click)="messageLang.set('hi')"
                  >
                    हिंदी
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 3 Invitation Categories Grid -->
          <div class="invitation-cards-grid">
            <!-- 1. Reception Only -->
            <div class="card-item luxury-card reception-card">
              <div class="card-top">
                <div class="card-header-badge reception">🍽️ 1. Reception Only</div>
                <h3 class="card-title">Royal Reception & Dinner</h3>
                <div class="card-schedule-pill">
                  📅 Tuesday, 1 Dec 2026 • 7:00 PM onwards
                </div>
                <p class="card-summary">
                  Curated for guests invited exclusively to the Evening Reception & Feast. Daytime ceremonies are hidden.
                </p>
              </div>

              <div class="card-url-preview">
                <span class="url-label">URL:</span>
                <code class="url-code">{{ getInviteUrl('reception') }}</code>
              </div>

              <div class="card-action-buttons">
                <button
                  type="button"
                  class="btn-royal action-copy-btn"
                  (click)="copyWhatsAppMessage('reception')"
                >
                  <span>{{ copiedType() === 'reception' ? '✓ WhatsApp Message Copied!' : '📋 Copy WhatsApp Invite' }}</span>
                </button>
                <div class="secondary-btn-row">
                  <button
                    type="button"
                    class="btn-secondary"
                    (click)="copyLinkOnly('reception')"
                  >
                    🔗 Copy Link
                  </button>
                  <a
                    [href]="getInviteUrl('reception')"
                    target="_blank"
                    class="btn-secondary"
                  >
                    👁️ Preview
                  </a>
                </div>
              </div>
            </div>

            <!-- 2. 1 December Only -->
            <div class="card-item luxury-card dec1-card">
              <div class="card-top">
                <div class="card-header-badge dec1">💍 2. 1 December Full Day</div>
                <h3 class="card-title">Complete Day 2 Celebrations</h3>
                <div class="card-schedule-pill">
                  📅 Tuesday, 1 Dec 2026 • 10:30 AM to Late Night
                </div>
                <p class="card-summary">
                  Includes Engagement (10:30 AM), Haldi (1:00 PM), Var Nikasi (6:00 PM), and Reception (7:00 PM onwards).
                </p>
              </div>

              <div class="card-url-preview">
                <span class="url-label">URL:</span>
                <code class="url-code">{{ getInviteUrl('dec1') }}</code>
              </div>

              <div class="card-action-buttons">
                <button
                  type="button"
                  class="btn-royal action-copy-btn"
                  (click)="copyWhatsAppMessage('dec1')"
                >
                  <span>{{ copiedType() === 'dec1' ? '✓ WhatsApp Message Copied!' : '📋 Copy WhatsApp Invite' }}</span>
                </button>
                <div class="secondary-btn-row">
                  <button
                    type="button"
                    class="btn-secondary"
                    (click)="copyLinkOnly('dec1')"
                  >
                    🔗 Copy Link
                  </button>
                  <a
                    [href]="getInviteUrl('dec1')"
                    target="_blank"
                    class="btn-secondary"
                  >
                    👁️ Preview
                  </a>
                </div>
              </div>
            </div>

            <!-- 3. Both Days -->
            <div class="card-item luxury-card both-card">
              <div class="card-top">
                <div class="card-header-badge both">❤️ 3. Both Days (Full Event)</div>
                <h3 class="card-title">Complete 2-Day Wedding Festivities</h3>
                <div class="card-schedule-pill">
                  📅 30 Nov & 1 Dec 2026 • Full Schedule
                </div>
                <p class="card-summary">
                  Complete schedule: Mata Poojan, Mamera, Sangeet, Ring Ceremony, Haldi, Baraat & Royal Reception.
                </p>
              </div>

              <div class="card-url-preview">
                <span class="url-label">URL:</span>
                <code class="url-code">{{ getInviteUrl('both') }}</code>
              </div>

              <div class="card-action-buttons">
                <button
                  type="button"
                  class="btn-royal action-copy-btn"
                  (click)="copyWhatsAppMessage('both')"
                >
                  <span>{{ copiedType() === 'both' ? '✓ WhatsApp Message Copied!' : '📋 Copy WhatsApp Invite' }}</span>
                </button>
                <div class="secondary-btn-row">
                  <button
                    type="button"
                    class="btn-secondary"
                    (click)="copyLinkOnly('both')"
                  >
                    🔗 Copy Link
                  </button>
                  <a
                    [href]="getInviteUrl('both')"
                    target="_blank"
                    class="btn-secondary"
                  >
                    👁️ Preview
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Toast Notification Banner -->
          <div *ngIf="feedbackToast()" class="feedback-toast-banner" role="status">
            ✨ {{ feedbackToast() }}
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .admin-page-container {
      min-height: 100vh;
      background: linear-gradient(180deg, #FDFBF7 0%, #FAF6EE 50%, #F5ECDD 100%);
      color: #2E2520;
      position: relative;
      overflow-x: hidden;
      padding-bottom: 3rem;
    }

    .admin-bg-glow {
      position: fixed;
      top: -200px;
      right: -100px;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(243, 217, 159, 0.35) 0%, rgba(197, 160, 89, 0.1) 60%, transparent 80%);
      pointer-events: none;
      filter: blur(50px);
      z-index: 0;
    }

    /* AUTH LOGIN SCREEN */
    .auth-wrapper {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1.25rem;
      position: relative;
      z-index: 2;
    }

    .auth-card {
      max-width: 480px;
      width: 100%;
      background: rgba(255, 255, 255, 0.96);
      border: 2px solid rgba(197, 160, 89, 0.45);
      border-radius: 28px;
      padding: 3rem 2.5rem;
      box-shadow: 0 24px 60px -10px rgba(122, 25, 43, 0.15), 0 8px 30px rgba(197, 160, 89, 0.2);
      text-align: center;
    }

    .auth-header {
      margin-bottom: 2rem;
    }

    .auth-badge {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 700;
      color: #7A192B;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .auth-title {
      font-size: 2.2rem;
      color: #7A192B;
      font-weight: 700;
      margin-bottom: 0.35rem;
    }

    .auth-subtitle {
      font-size: 0.92rem;
      color: #6E6259;
      line-height: 1.4;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      text-align: left;
    }

    .form-label {
      font-size: 0.88rem;
      font-weight: 600;
      color: #2E2520;
      display: block;
      margin-bottom: 0.4rem;
    }

    .password-field-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .admin-input {
      width: 100%;
      padding: 12px 48px 12px 16px;
      border: 1.5px solid #C5A059;
      border-radius: 12px;
      font-family: inherit;
      font-size: 1rem;
      background: #FAF6EF;
      color: #2E2520;
      outline: none;
      transition: all 0.25s ease;
    }

    .admin-input:focus {
      background: #FFFFFF;
      border-color: #7A192B;
      box-shadow: 0 0 0 3px rgba(122, 25, 43, 0.12);
    }

    .password-toggle-btn {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.1rem;
      opacity: 0.75;
      padding: 4px;
      transition: opacity 0.2s;
    }

    .password-toggle-btn:hover {
      opacity: 1;
    }

    .error-alert {
      padding: 10px 14px;
      background: #FDF0F0;
      border: 1px solid #E88080;
      border-radius: 10px;
      color: #9E263E;
      font-size: 0.85rem;
      font-weight: 600;
    }

    .submit-btn {
      width: 100%;
      margin-top: 0.5rem;
      font-size: 1rem;
    }

    .auth-footer {
      margin-top: 2rem;
      padding-top: 1.25rem;
      border-top: 1px dashed rgba(197, 160, 89, 0.3);
    }

    .back-link {
      font-size: 0.88rem;
      color: #7A192B;
      font-weight: 600;
      transition: color 0.2s ease;
    }

    .back-link:hover {
      text-decoration: underline;
      color: #560F1D;
    }

    /* AUTHENTICATED ADMIN PANEL */
    .admin-panel-wrapper {
      position: relative;
      z-index: 2;
    }

    .admin-nav-bar {
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1.5px solid rgba(197, 160, 89, 0.35);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }

    .admin-nav-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.85rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .admin-brand {
      display: flex;
      flex-direction: column;
    }

    .brand-badge {
      font-size: 0.72rem;
      font-weight: 700;
      color: #7A192B;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .brand-title {
      font-size: 1.3rem;
      color: #7A192B;
      font-weight: 700;
      margin: 0;
    }

    .admin-nav-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .nav-btn {
      padding: 8px 16px;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      transition: all 0.25s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }

    .view-site-btn {
      background: #FAF4EB;
      color: #7A192B;
      border: 1px solid rgba(197, 160, 89, 0.5);
    }

    .view-site-btn:hover {
      background: #C5A059;
      color: #FFFFFF;
      border-color: #C5A059;
    }

    .logout-btn {
      background: rgba(122, 25, 43, 0.08);
      color: #7A192B;
      border: 1px solid rgba(122, 25, 43, 0.2);
    }

    .logout-btn:hover {
      background: #7A192B;
      color: #FFFFFF;
      border-color: #7A192B;
    }

    /* MAIN ADMIN CONTENT */
    .admin-content-container {
      max-width: 1200px;
      margin: 2rem auto 0 auto;
      padding: 0 1.5rem;
    }

    .intro-card {
      background: rgba(255, 255, 255, 0.95);
      border: 1.5px solid rgba(197, 160, 89, 0.35);
      border-radius: 24px;
      padding: 2.25rem;
      margin-bottom: 2rem;
    }

    .intro-badge {
      display: inline-block;
      font-size: 0.78rem;
      font-weight: 700;
      color: #7A192B;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 0.35rem;
    }

    .intro-title {
      font-size: 2.2rem;
      color: #7A192B;
      font-weight: 700;
      margin-bottom: 0.4rem;
    }

    .intro-desc {
      font-size: 1rem;
      color: #5C4E47;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }

    .controls-toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      padding: 1.25rem 1.5rem;
      background: #FAF6EF;
      border: 1px solid rgba(197, 160, 89, 0.3);
      border-radius: 16px;
      align-items: flex-end;
    }

    .toolbar-item {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .guest-input-item {
      flex: 1;
      min-width: 280px;
    }

    .toolbar-label {
      font-size: 0.85rem;
      font-weight: 600;
      color: #2E2520;
    }

    .guest-input-wrap {
      position: relative;
      display: flex;
      align-items: center;
    }

    .guest-text-input {
      width: 100%;
      padding: 10px 36px 10px 14px;
      border-radius: 10px;
      border: 1.5px solid #C5A059;
      font-family: inherit;
      font-size: 0.95rem;
      background: #FFFFFF;
      outline: none;
    }

    .guest-text-input:focus {
      border-color: #7A192B;
      box-shadow: 0 0 0 3px rgba(122, 25, 43, 0.1);
    }

    .clear-input-btn {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.9rem;
      color: #8A7A70;
      padding: 4px;
    }

    .lang-pill-group {
      display: inline-flex;
      background: #EFE7DA;
      padding: 4px;
      border-radius: 9999px;
      border: 1px solid rgba(197, 160, 89, 0.4);
    }

    .lang-pill-btn {
      padding: 6px 16px;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      color: #5C4E47;
      transition: all 0.2s ease;
    }

    .lang-pill-btn.active {
      background: #7A192B;
      color: #FFFFFF;
      box-shadow: 0 2px 6px rgba(122, 25, 43, 0.3);
    }

    /* CARDS GRID */
    .invitation-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }

    .card-item {
      background: #FFFFFF;
      border: 1.5px solid rgba(197, 160, 89, 0.35);
      border-radius: 20px;
      padding: 1.75rem 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.25rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card-item:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 36px -8px rgba(122, 25, 43, 0.12), 0 4px 16px rgba(197, 160, 89, 0.2);
    }

    .card-header-badge {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.5rem;
    }

    .card-header-badge.reception { color: #9E263E; }
    .card-header-badge.dec1 { color: #8A5E12; }
    .card-header-badge.both { color: #7A192B; }

    .card-title {
      font-size: 1.35rem;
      color: #2E2520;
      font-weight: 700;
      margin-bottom: 0.4rem;
    }

    .card-schedule-pill {
      font-size: 0.82rem;
      font-weight: 600;
      color: #7A192B;
      background: #FAF4EB;
      border: 1px solid rgba(197, 160, 89, 0.3);
      border-radius: 6px;
      padding: 4px 8px;
      display: inline-block;
      margin-bottom: 0.75rem;
    }

    .card-summary {
      font-size: 0.88rem;
      color: #5C4E47;
      line-height: 1.45;
    }

    .card-url-preview {
      background: #FAF6EF;
      border: 1px solid rgba(197, 160, 89, 0.25);
      border-radius: 8px;
      padding: 8px 10px;
      font-size: 0.75rem;
      display: flex;
      gap: 6px;
      align-items: center;
      overflow: hidden;
    }

    .url-label {
      font-weight: 700;
      color: #7A192B;
      flex-shrink: 0;
    }

    .url-code {
      color: #5C4E47;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: monospace;
    }

    .card-action-buttons {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .action-copy-btn {
      width: 100%;
      padding: 12px;
      font-size: 0.92rem;
      min-height: 44px;
    }

    .secondary-btn-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .btn-secondary {
      padding: 8px 12px;
      border: 1px solid #C5A059;
      border-radius: 9999px;
      background: #FAF4EB;
      color: #7A192B;
      font-size: 0.82rem;
      font-weight: 600;
      text-align: center;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }

    .btn-secondary:hover {
      background: #C5A059;
      color: #FFFFFF;
    }

    /* FEEDBACK TOAST BANNER */
    .feedback-toast-banner {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 1000;
      background: #1A130C;
      color: #F3D99F;
      padding: 12px 24px;
      border-radius: 12px;
      font-size: 0.95rem;
      font-weight: 600;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(197, 160, 89, 0.4);
      animation: popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes popIn {
      from { opacity: 0; transform: translateY(12px) scale(0.96); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @media (max-width: 640px) {
      .auth-card {
        padding: 2.25rem 1.5rem;
      }

      .auth-title {
        font-size: 1.8rem;
      }

      .admin-content-container {
        padding: 0 1rem;
      }

      .intro-card {
        padding: 1.5rem 1.25rem;
      }

      .intro-title {
        font-size: 1.6rem;
      }

      .controls-toolbar {
        padding: 1rem;
        flex-direction: column;
        align-items: stretch;
      }

      .feedback-toast-banner {
        left: 1rem;
        right: 1rem;
        bottom: 1rem;
        text-align: center;
      }
    }
  `]
})
export class AdminComponent {
  public readonly authService = inject(AdminAuthService);
  private readonly router = inject(Router);

  public passwordInput = '';
  public showPassword = signal<boolean>(false);
  public errorMessage = signal<string | null>(null);

  public customGuestName = '';
  public messageLang = signal<'en' | 'hi'>('en');
  public copiedType = signal<InviteType | null>(null);
  public feedbackToast = signal<string | null>(null);

  public togglePasswordVisibility(): void {
    this.showPassword.update((v) => !v);
  }

  public onLogin(): void {
    this.errorMessage.set(null);
    const success = this.authService.login(this.passwordInput);
    if (success) {
      this.passwordInput = '';
      this.errorMessage.set(null);
    } else {
      this.errorMessage.set('Invalid admin password. Please try again.');
    }
  }

  public onLogout(): void {
    this.authService.logout();
    this.passwordInput = '';
    this.errorMessage.set(null);
  }

  public getBasePublicUrl(): string {
    if (typeof window === 'undefined') return '';
    const origin = window.location.origin;
    const path = window.location.pathname.replace(/\/admin\/?$/, '');
    return `${origin}${path || ''}/`;
  }

  public getInviteUrl(type: 'reception' | 'dec1' | 'both'): string {
    const base = this.getBasePublicUrl();
    const guestParam = this.customGuestName.trim()
      ? `&guest=${encodeURIComponent(this.customGuestName.trim())}`
      : '';

    if (type === 'reception') {
      return `${base}?type=reception${guestParam}`;
    } else if (type === 'dec1') {
      return `${base}?type=dec1${guestParam}`;
    } else {
      return guestParam ? `${base}?type=both${guestParam}` : base;
    }
  }

  public copyLinkOnly(type: 'reception' | 'dec1' | 'both'): void {
    const link = this.getInviteUrl(type);
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(link).then(() => {
        this.showToast(`Copied direct link for ${type === 'reception' ? 'Reception' : type === 'dec1' ? '1 Dec' : 'Both Days'}!`);
      });
    }
  }

  public copyWhatsAppMessage(type: InviteType): void {
    if (typeof window === 'undefined') return;

    const isHi = this.messageLang() === 'hi';
    const guest = this.customGuestName.trim();
    const guestGreeting = guest
      ? (isHi ? `सादर आमंत्रण: *${guest}*\n\n` : `Cordially Invited: *${guest}*\n\n`)
      : '';

    const inviteUrl = this.getInviteUrl(type);
    let messageText = '';

    if (type === 'reception') {
      messageText = isHi
        ? `✨ *शाही प्रीतिभोज निमंत्रण* ✨\n\n${guestGreeting}*पलाश एवं सोनम* के शुभ विवाह के पावन अवसर पर आयोजित *शाही प्रीतिभोज (रिसेप्शन)* में आप सपरिवार सादर आमंत्रित हैं।\n\n📅 *तिथि:* मंगलवार, १ दिसंबर २०२६\n🕖 *समय:* सायं ०७:०० बजे से\n📍 *स्थान:* उदयपुर, राजस्थान\n\n💌 *डिजिटल निमंत्रण कार्ड देखें:* \n${inviteUrl}`
        : `✨ *Wedding Reception Invitation* ✨\n\n${guestGreeting}Together with their families, *Palash & Sonam* cordially invite you to celebrate their *Royal Wedding Reception & Dinner*!\n\n📅 *Date:* Tuesday, 1 December 2026\n🕖 *Time:* 7:00 PM onwards\n📍 *Venue:* Udaipur, Rajasthan\n\n💌 *View Interactive Invitation:* \n${inviteUrl}`;
    } else if (type === 'dec1') {
      messageText = isHi
        ? `✨ *शुभ विवाह निमंत्रण* ✨\n\n${guestGreeting}*पलाश एवं सोनम* के शुभ विवाह समारोह में आप सपरिवार सादर आमंत्रित हैं।\n\n📅 *दिनांक:* मंगलवार, १ दिसंबर २०२६\n\n🌸 *मांगलिक कार्यक्रम:* \n• प्रातः १०:३० बजे — सगाई समारोह (रिंग सेरेमनी)\n• दोपहर ०१:०० बजे — हल्दी उत्सव\n• सायं ०६:०० बजे — वर निकासी (शाही बारात)\n• सायं ०७:०० बजे से — प्रीतिभोज (शाही दावत)\n\n📍 *स्थान:* उदयपुर, राजस्थान\n\n💌 *डिजिटल निमंत्रण कार्ड देखें:* \n${inviteUrl}`
        : `✨ *Wedding Invitation* ✨\n\n${guestGreeting}Together with their families, *Palash & Sonam* invite you to celebrate their auspicious wedding ceremonies on *Tuesday, 1 December 2026*!\n\n📅 *Schedule:* \n• 10:30 AM — Engagement Ceremony\n• 1:00 PM — Haldi Ceremony\n• 6:00 PM — Var Nikasi (Royal Baraat)\n• 7:00 PM onwards — Reception & Dinner Feast\n\n📍 *Venue:* Udaipur, Rajasthan\n\n💌 *View Interactive Invitation:* \n${inviteUrl}`;
    } else {
      messageText = isHi
        ? `✨ *मांगलिक विवाह निमंत्रण* ✨\n\n${guestGreeting}*पलाश एवं सोनम* के शुभ विवाह के दो दिवसीय पावन उत्सव में आप सपरिवार सादर आमंत्रित हैं।\n\n🌸 *सोमवार, ३० नवंबर २०२६:* \n• प्रातः १०:०० बजे — माता पूजन\n• दोपहर ०१:०० बजे — मामेरा (भात)\n• सायं ०७:०० बजे — महिला संगीत\n\n🌸 *मंगलवार, १ दिसंबर २०२६:* \n• प्रातः १०:३० बजे — सगाई समारोह\n• दोपहर ०१:०० बजे — हल्दी उत्सव\n• सायं ०६:०० बजे — वर निकासी\n• सायं ०७:०० बजे से — प्रीतिभोज\n\n📍 *स्थान:* उदयपुर, राजस्थान\n\n💌 *डिजिटल निमंत्रण कार्ड देखें:* \n${inviteUrl}`
        : `✨ *Royal Wedding Invitation* ✨\n\n${guestGreeting}Together with their families, *Palash & Sonam* invite you to celebrate their two-day wedding festivities!\n\n🌸 *Monday, 30 November 2026:* \n• 10:00 AM — Mata Poojan\n• 1:00 PM — Mamera\n• 7:00 PM — Mahela Sangeet\n\n🌸 *Tuesday, 1 December 2026:* \n• 10:30 AM — Engagement Ceremony\n• 1:00 PM — Haldi Celebration\n• 6:00 PM — Var Nikasi (Baraat)\n• 7:00 PM onwards — Reception / Dinner\n\n📍 *Venue:* Udaipur, Rajasthan\n\n💌 *View Interactive Invitation:* \n${inviteUrl}`;
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(messageText).then(() => {
        this.copiedType.set(type);
        this.showToast(`Copied WhatsApp Invite for ${type === 'reception' ? 'Reception' : type === 'dec1' ? '1 Dec' : 'Both Days'}!`);
        setTimeout(() => {
          this.copiedType.set(null);
        }, 3000);
      });
    }
  }

  private showToast(msg: string): void {
    this.feedbackToast.set(msg);
    setTimeout(() => {
      this.feedbackToast.set(null);
    }, 3500);
  }
}
