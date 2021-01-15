module.exports = (res, directTo, message) => {
  console.log('direct To:', directTo, 'because:', message);
  res.render(directTo, { error: message });
}