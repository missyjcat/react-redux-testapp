export const FETCH_PIN = 'FETCH_PIN';

export function getPin(id) {
    return {
        type: FETCH_PIN,
        id: id
    }
}