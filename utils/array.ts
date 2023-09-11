export function gerarIndiceAleatorioDeArray(comprimentoDoArray: number) {
  return Math.floor(Math.random() * ((comprimentoDoArray - 1) + 1));
}