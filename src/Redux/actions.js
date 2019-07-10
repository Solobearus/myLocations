
/*
 * action types
 */

export const ADD = 'ADD'
export const UPDATE = 'UPDATE'
export const DELETE = 'DELETE'

/*
 * action creators
 */

export function add(payload) {
    return { type: ADD, payload }
};

export function update(payload) {
    return { type: UPDATE, payload }
};

export function remove(payload) {
    return { type: DELETE, payload }
};

