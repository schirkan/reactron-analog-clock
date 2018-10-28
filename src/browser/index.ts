import { IComponentDefinition } from '../common/interfaces/IComponentDefinition';
import { AnalogClock } from './components/AnalogClock';

export * from './components/AnalogClock';

export const components: IComponentDefinition[] = [{
    component: AnalogClock,
    description: 'Analog Clock',
    displayName: 'Analog Clock',
    name: 'AnalogClock',
    options: [{
        defaultValue: 'simple',
        description: 'Clock style',
        displayName: 'Style',
        name: 'text',
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
        name: 'text',
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
        name: 'text',
        valueType: 'string'
    },{
        defaultValue: 'local',
        description: 'Timezone',
        displayName: 'Timezone',
        name: 'text',
        valueType: 'string',
        values: [
            { value: 'local', text: 'Local' },
            { value: 'Europe/Berlin', text: 'Europe/Berlin' },
            { value: 'Europe/London', text: 'Europe/London' },
            { value: 'Asia/Tokyo', text: 'Asia/Tokyo' },
            { value: 'America/New_York', text: 'America/New York' },
        ]
    }]
}];