import { IReactronComponentDefinition } from '@schirkan/reactron-interfaces';
import { AnalogClock } from './components/AnalogClock';

export * from './components/AnalogClock';

export const components: IReactronComponentDefinition[] = [{
    component: AnalogClock,
    description: 'Analog Clock',
    displayName: 'Analog Clock',
    fields: [{
        defaultValue: 'simple',
        description: 'Clock style',
        displayName: 'Style',
        name: 'style',
        valueType: 'string',
        values: [
            { value: 'simple', text: 'Simple' },
            { value: 'station', text: 'Station' },
            { value: 'ios7', text: 'IOS 7' },
        ]
    },{
        defaultValue: 'bounce',
        description: 'Clock Animation',
        displayName: 'Animation',
        name: 'animation',
        valueType: 'string',
        values: [
            { value: 'bounce', text: 'Bounce' },
            { value: 'steps', text: 'Steps' },
            { value: 'linear', text: 'Linear' },
        ]
    },{
        defaultValue: '',
        description: 'Label',
        displayName: 'Label',
        name: 'label',
        valueType: 'string'
    },{
        defaultValue: 'local',
        description: 'Timezone',
        displayName: 'Timezone',
        name: 'timezone',
        valueType: 'string',
        values: [
            { value: 'local', text: 'Local' },
            { value: 'Europe/Berlin', text: 'Europe/Berlin' },
            { value: 'Europe/London', text: 'Europe/London' },
            { value: 'Asia/Tokyo', text: 'Asia/Tokyo' },
            { value: 'America/New_York', text: 'America/New York' },
        ]
    }],
    name: 'AnalogClock'
}];