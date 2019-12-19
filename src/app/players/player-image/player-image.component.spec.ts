import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerImageComponent } from './player-image.component';

describe('PlayerImageComponent', () => {
  let component: PlayerImageComponent;
  let fixture: ComponentFixture<PlayerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
