function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log('cold start');

exports.scheduledEventLoggerHandler = async (event, context) => {
  await sleep(5000);
  console.info('Autoscaled Provisioned');
};
