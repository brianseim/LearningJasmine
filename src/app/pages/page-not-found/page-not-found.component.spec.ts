import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Page Not Found'`, async(() => {
    const fixture2 = TestBed.createComponent(PageNotFoundComponent);
    const app = fixture2.debugElement.componentInstance;
    expect(app.title).toEqual('Page Not Found');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture3 = TestBed.createComponent(PageNotFoundComponent);
    fixture3.detectChanges();
    const compiled = fixture3.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Page Not Found');
  }));
});
