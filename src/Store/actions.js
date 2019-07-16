
/*
 * action types
 */

export const INIT = 'INIT'
export const ADD = 'ADD'
export const UPDATE = 'UPDATE'
export const REMOVE = 'REMOVE'

/*
 * action creators
 */

export function init(payload) {
    return { type: INIT, payload }
};

export function add(payload) {
    return { type: ADD, payload }
};

export function update(payload) {
    return { type: UPDATE, payload }
};

export function remove(payload) {
    return { type: REMOVE, payload }
};

