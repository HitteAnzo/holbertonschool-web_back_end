export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw TypeError('Name must be a string');
        }
        if (typeof length !== 'number') {
            throw TypeError('Lenght must be a number');
        }
        if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
            throw TypeError('Students must be an array');
        }
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }

    set name(NewName) {
        if (typeof NewName !== 'string'){
            throw TypeError('Name must be a string');
        }
        this._name = NewName;
    }

    get length() {
        return this._length;
    }

    set length(NewLength) {
        if (typeof NewLength !== 'number') {
            throw TypeError('Length must be a number');
        }
        this._length = NewLength;
    }

    get students() {
        return this._students;
    }

    set students(NewStudents) {
        if (!Array.isArray(NewStudents) || !NewStudents.every((student) => typeof student === 'string')) {
            throw TypeError('Students must be an array');
        }
        this._students = NewStudents;
    }
}