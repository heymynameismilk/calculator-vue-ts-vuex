import {Component, Vue} from 'vue-property-decorator';
import Calculator from './components/Calculator/Calculator';

import './App.css'

@Component({
    name: 'Calculator'
})
export default class App extends Vue {
    render() {
        return (
            <div id="app">
                <Calculator/>
            </div>
        )
    }
}
