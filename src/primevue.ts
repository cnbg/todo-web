import app from './createapp'

import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import Ripple from 'primevue/ripple'
import FocusTrap from 'primevue/focustrap'
import StyleClass from 'primevue/styleclass'
import DialogService from 'primevue/dialogservice'
import ConfirmationService from 'primevue/confirmationservice'

import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Column from 'primevue/column'
import ConfirmDialog from 'primevue/confirmdialog'
import DataTable from 'primevue/datatable'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Password from 'primevue/password'
import Select from 'primevue/select'
import SelectButton from 'primevue/selectbutton'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Toast from 'primevue/toast'
import ToggleSwitch from 'primevue/toggleswitch'

app.use(ToastService)
app.use(DialogService)
app.use(ConfirmationService)

app.directive('ripple', Ripple)
app.directive('tooltip', Tooltip)
app.directive('focustrap', FocusTrap)
app.directive('styleclass', StyleClass)

app.component('Avatar', Avatar)
app.component('Badge', Badge)
app.component('Button', Button)
app.component('Card', Card)
app.component('Column', Column)
app.component('ConfirmDialog', ConfirmDialog)
app.component('DataTable', DataTable)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('InputText', InputText)
app.component('Message', Message)
app.component('Password', Password)
app.component('Select', Select)
app.component('SelectButton', SelectButton)
app.component('Tab', Tab)
app.component('TabList', TabList)
app.component('TabPanel', TabPanel)
app.component('TabPanels', TabPanels)
app.component('Tabs', Tabs)
app.component('Toast', Toast)
app.component('ToggleSwitch', ToggleSwitch)

app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        },
    },
} as any)

export default app
