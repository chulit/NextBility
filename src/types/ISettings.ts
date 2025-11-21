import { ICustomPaletteState } from '@/tools/customPalette';
import { WidgetSizePreset } from '@/config/widgetSize';

export interface ISettingsStates {
  fontSize?: number;
  contrast?: string | false;
  'custom-palette'?: ICustomPaletteState;
  [key: string]: boolean | string | number | ICustomPaletteState | undefined;
}

export interface ISettings {
  lang?: string;
  position?: string;
  offset?: number[];
  widgetSize?: WidgetSizePreset | number;
  activeProfile?: string;
  footerHidden?: boolean;
  footerSize?: 'small' | 'medium' | 'large';
  states: ISettingsStates;
  updatedAt?: Date;
}
