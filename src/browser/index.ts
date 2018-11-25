import { IReactronComponentDefinition } from '@schirkan/reactron-interfaces';
import moment from 'moment';
import momentTimezone from 'moment-timezone';
import { AnalogClock } from './components/AnalogClock';

interface ITimezone {
    value: string;
    text: string;
}

const timezoneNames = momentTimezone.tz.names();
const timezones: ITimezone[] = [];

timezoneNames.forEach(timezone => {
    timezones.push({
        text: "(GMT"+moment.tz(timezone).format('Z')+") " + timezone.replace('_', ' '),
        value: timezone
    });
});

timezones.sort((a, b) => a.text.localeCompare(b.text));

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
    }, {
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
    }, {
        defaultValue: '',
        description: 'Label',
        displayName: 'Label',
        name: 'label',
        valueType: 'string'
    }, {
        defaultValue: 'local',
        description: 'Timezone',
        displayName: 'Timezone',
        name: 'timezone',
        valueType: 'string',
        values: [
            { value: 'local', text: 'Local' },
            ...timezones
        ]
    }],
    name: 'AnalogClock'
}];

export * from './components/AnalogClock';