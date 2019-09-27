import Arr from './array';

export var $_ = function (value: any): any {
    if (Array.isArray(value)) {
        return new Arr(value);
    }
}

export default $_;

export { Arr };