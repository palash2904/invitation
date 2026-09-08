import { Injectable, computed, signal } from '@angular/core';
import { TRANSLATIONS, WEDDING_COUPLE, WEDDING_DAYS } from '../data/wedding-data';
import { WeddingCoupleInfo, WeddingDay, WeddingTranslations } from '../models/wedding-event.model';

export type Language = 'en' | 'hi';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly STORAGE_KEY = 'wedding_invitation_lang';
  
  private readonly _lang = signal<Language>(this.getInitialLang());
  
  public readonly currentLang = this._lang.asReadonly();
  public readonly isHindi = computed(() => this._lang() === 'hi');
  
  public readonly t = computed<WeddingTranslations>(() => TRANSLATIONS[this._lang()]);
  
  public readonly couple = computed<WeddingCoupleInfo>(() => WEDDING_COUPLE);
  
  public readonly groomName = computed(() => 
    this._lang() === 'hi' ? WEDDING_COUPLE.groomHi : WEDDING_COUPLE.groom
  );
  
  public readonly brideName = computed(() => 
    this._lang() === 'hi' ? WEDDING_COUPLE.brideHi : WEDDING_COUPLE.bride
  );
  
  public readonly weddingDates = computed(() => 
    this._lang() === 'hi' ? WEDDING_COUPLE.weddingDatesHi : WEDDING_COUPLE.weddingDatesEn
  );
  
  public readonly days = computed<WeddingDay[]>(() => WEDDING_DAYS);

  private getInitialLang(): Language {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(this.STORAGE_KEY) as Language;
      if (saved === 'en' || saved === 'hi') {
        return saved;
      }
    }
    return 'en';
  }

  public setLanguage(lang: Language): void {
    this._lang.set(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        window.localStorage.setItem(this.STORAGE_KEY, lang);
      } catch (e) {
        // Safe fallback
      }
    }
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  public toggleLanguage(): void {
    const next = this._lang() === 'en' ? 'hi' : 'en';
    this.setLanguage(next);
  }
}
