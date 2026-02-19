import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import {
  IColumnVisibilityChangedEventArgs,
  IPinColumnEventArgs,
  IgxColumnComponent,
  IgxGridStateDirective,
  IgxGridToolbarActionsComponent,
  IgxGridToolbarComponent,
  IgxGridToolbarHidingComponent,
  IgxGridToolbarPinningComponent,
} from '@infragistics/igniteui-angular/grids/core';
import { IgxGridComponent } from '@infragistics/igniteui-angular/grids/grid';
import { sampleData } from './data';

@Component({
  selector: 'app-root',
  imports: [
    IgxGridComponent,
    IgxGridStateDirective,
    IgxColumnComponent,
    IgxGridToolbarComponent,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarHidingComponent,
    IgxGridToolbarPinningComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly stateDirective = viewChild.required(IgxGridStateDirective);

  protected readonly data = sampleData;
  protected readonly eventLog = signal<string[]>([]);
  protected readonly savedState = signal<string | null>(null);

  protected onColumnVisibilityChanged(event: IColumnVisibilityChangedEventArgs): void {
    const entry = `[${timestamp()}] columnVisibilityChanged: column "${event.column.field}" hidden=${event.newValue}`;
    this.eventLog.update((log) => [entry, ...log]);
  }

  protected onColumnPinned(event: IPinColumnEventArgs): void {
    const entry = `[${timestamp()}] columnPin: column "${event.column.field}" pinned=${event.isPinned}`;
    this.eventLog.update((log) => [entry, ...log]);
  }

  protected extractState(): void {
    const state = this.stateDirective().getState() as string;
    this.savedState.set(state);
    const entry = `[${timestamp()}] State extracted`;
    this.eventLog.update((log) => [entry, ...log]);
  }

  protected applyState(): void {
    const state = this.savedState();
    if (state === null) {
      return;
    }
    const entry = `[${timestamp()}] Applying state (expect no events below for columnVisibilityChanged / columnPin)...`;
    this.eventLog.update((log) => [entry, ...log]);
    this.stateDirective().setState(state);
  }

  protected clearState(): void {
    this.savedState.set(null);
    const entry = `[${timestamp()}] State cleared`;
    this.eventLog.update((log) => [entry, ...log]);
  }

  protected clearLog(): void {
    this.eventLog.set([]);
  }
}

function timestamp(): string {
  return new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}
