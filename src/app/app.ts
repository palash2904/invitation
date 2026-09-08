import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopControlsComponent } from './components/top-controls/top-controls.component';
import { HeroComponent } from './components/hero/hero.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { EventsComponent } from './components/events/events.component';
import { CoupleStoryComponent } from './components/couple-story/couple-story.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { ClosingComponent } from './components/closing/closing.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TopControlsComponent,
    HeroComponent,
    WelcomeComponent,
    CountdownComponent,
    EventsComponent,
    CoupleStoryComponent,
    HighlightComponent,
    ClosingComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public readonly translationService = inject(TranslationService);
}
