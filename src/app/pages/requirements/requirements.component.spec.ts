import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsComponent } from './requirements.component';
import {AppComponent} from '../../app.component';

describe('RequirementsComponent', () => {
  let component: RequirementsComponent;
  let fixture: ComponentFixture<RequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Requirements'`, async(() => {
    const fixture = TestBed.createComponent(RequirementsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Requirements');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(RequirementsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Requirements');
  }));
});