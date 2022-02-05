module.exports = async function* pipe(stream, isPiped, params) {
  const arg = params._.join(' ');
  for await (let chunk of stream) {
    yield arg;
  }
};
