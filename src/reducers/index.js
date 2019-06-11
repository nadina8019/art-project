import { combineReducers} from 'redux';
import PainterReducer from  './reducer-painters';
import ActivePainterReducer from './reducer-active-painter';

const allReducers = combineReducers({
    painters: PainterReducer,
    activePainter: ActivePainterReducer
});

export default allReducers;