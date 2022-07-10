import { writable } from 'svelte/store'


export let estado = writable('sobre');

export function trocarEstadoDoJogo(novoEstado) {
	estado.set(novoEstado)
}