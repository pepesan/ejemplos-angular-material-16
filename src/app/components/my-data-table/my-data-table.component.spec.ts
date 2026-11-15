import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataTableComponent } from './my-data-table.component';

describe('MyDataTableComponent', () => {
  let component: MyDataTableComponent;
  let fixture: ComponentFixture<MyDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDataTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('paginates the sample rows in pages of five', () => {
    const rows = () => Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('tr[mat-row]')
    );
    expect(rows()).toHaveSize(5);

    const nextPage = (fixture.nativeElement as HTMLElement)
      .querySelector('button[aria-label="Next page"]') as HTMLButtonElement;
    nextPage.click();
    fixture.detectChanges();

    expect(rows()).toHaveSize(5);
    expect(rows()[0].textContent).toContain('6');
  });
});
