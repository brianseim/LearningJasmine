import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsComponent } from './requirements.component';

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
    const fixture2 = TestBed.createComponent(RequirementsComponent);
    const app = fixture2.debugElement.componentInstance;
    expect(app.title).toEqual('Requirements');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture3 = TestBed.createComponent(RequirementsComponent);
    fixture3.detectChanges();
    const compiled = fixture3.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Requirements');
  }));
});
