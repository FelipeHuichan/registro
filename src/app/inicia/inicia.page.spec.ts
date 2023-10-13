import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciaPage } from './inicia.page';

describe('IniciaPage', () => {
  let component: IniciaPage;
  let fixture: ComponentFixture<IniciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
