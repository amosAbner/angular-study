import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customers';
import { Consult } from './consult';

describe('Consult', () => {
  let component: Consult;
  let fixture: ComponentFixture<Consult>;
  let dialogSpy: { open: ReturnType<typeof vi.fn> };
  let customerServiceSpy: { listCustormer: ReturnType<typeof vi.fn>; delete: ReturnType<typeof vi.fn> };
  let routerSpy: { navigate: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    dialogSpy = {
      open: vi.fn(() => ({
        afterClosed: () => of(true)
      }))
    };

    customerServiceSpy = {
      listCustormer: vi.fn(() => []),
      delete: vi.fn(() => true)
    };

    routerSpy = {
      navigate: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [Consult],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: CustomerService, useValue: customerServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Consult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ask for confirmation before deleting a customer', () => {
    component.delete('1');

    expect(dialogSpy.open).toHaveBeenCalled();
    expect(customerServiceSpy.delete).toHaveBeenCalledWith('1');
    expect(customerServiceSpy.listCustormer).toHaveBeenCalledWith('');
  });
});
