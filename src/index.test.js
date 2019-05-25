var expect = require('chai').expect;
var timoji = require('./index');

describe('timoji', function () {
  describe('format', function () {
    it('should format a date', function () {
      expect(timoji.format(new Date('Jan 01, 2000 01:00:00'))).to.equal("🕐↘️0⃣🌜");
      expect(timoji.format(new Date('Jan 01, 2000 04:32:22'))).to.equal("🕟↖️2⃣🌜");
      expect(timoji.format(new Date('Jan 01, 2000 14:47:55'))).to.equal("🕒↪️3⃣🌞");
    });
  });

  describe('closestClock', function () {
    it('should format whole hours', function () {
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:00:00'))).to.equal("🕐");
      expect(timoji.closestClock(new Date('Jan 01, 2000 02:00:00'))).to.equal("🕑");
      expect(timoji.closestClock(new Date('Jan 01, 2000 03:00:00'))).to.equal("🕒");
      expect(timoji.closestClock(new Date('Jan 01, 2000 04:00:00'))).to.equal("🕓");
      expect(timoji.closestClock(new Date('Jan 01, 2000 05:00:00'))).to.equal("🕔");
      expect(timoji.closestClock(new Date('Jan 01, 2000 06:00:00'))).to.equal("🕕");
      expect(timoji.closestClock(new Date('Jan 01, 2000 07:00:00'))).to.equal("🕖");
      expect(timoji.closestClock(new Date('Jan 01, 2000 08:00:00'))).to.equal("🕗");
      expect(timoji.closestClock(new Date('Jan 01, 2000 09:00:00'))).to.equal("🕘");
      expect(timoji.closestClock(new Date('Jan 01, 2000 10:00:00'))).to.equal("🕙");
      expect(timoji.closestClock(new Date('Jan 01, 2000 11:00:00'))).to.equal("🕚");
      expect(timoji.closestClock(new Date('Jan 01, 2000 12:00:00'))).to.equal("🕛");
      expect(timoji.closestClock(new Date('Jan 01, 2000 13:00:00'))).to.equal("🕐");
    });
    it('should format half hours', function () {
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:30:00'))).to.equal("🕜");
      expect(timoji.closestClock(new Date('Jan 01, 2000 02:30:00'))).to.equal("🕝");
      expect(timoji.closestClock(new Date('Jan 01, 2000 03:30:00'))).to.equal("🕞");
      expect(timoji.closestClock(new Date('Jan 01, 2000 04:30:00'))).to.equal("🕟");
      expect(timoji.closestClock(new Date('Jan 01, 2000 05:30:00'))).to.equal("🕠");
      expect(timoji.closestClock(new Date('Jan 01, 2000 06:30:00'))).to.equal("🕡");
      expect(timoji.closestClock(new Date('Jan 01, 2000 07:30:00'))).to.equal("🕢");
      expect(timoji.closestClock(new Date('Jan 01, 2000 08:30:00'))).to.equal("🕣");
      expect(timoji.closestClock(new Date('Jan 01, 2000 09:30:00'))).to.equal("🕤");
      expect(timoji.closestClock(new Date('Jan 01, 2000 10:30:00'))).to.equal("🕥");
      expect(timoji.closestClock(new Date('Jan 01, 2000 11:30:00'))).to.equal("🕦");
      expect(timoji.closestClock(new Date('Jan 01, 2000 12:30:00'))).to.equal("🕧");
      expect(timoji.closestClock(new Date('Jan 01, 2000 13:30:00'))).to.equal("🕜");
    });
    it('should format 0-20 to this hour', function () {
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:00:00'))).to.equal("🕐");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:01:00'))).to.equal("🕐");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:09:00'))).to.equal("🕐");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:14:00'))).to.equal("🕐");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:19:59'))).to.equal("🕐");
    });
    it('should format 20-40 to half hour', function () {
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:20:00'))).to.equal("🕜");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:21:00'))).to.equal("🕜");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:29:00'))).to.equal("🕜");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:34:00'))).to.equal("🕜");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:39:59'))).to.equal("🕜");
    });
    it('should format 40-60 to next hour', function () {
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:40:00'))).to.equal("🕑");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:41:00'))).to.equal("🕑");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:49:00'))).to.equal("🕑");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:54:00'))).to.equal("🕑");
      expect(timoji.closestClock(new Date('Jan 01, 2000 01:59:59'))).to.equal("🕑");
    });
  });
  describe('dayOrNight', function () {
    it('should categorize day', function () {
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 06:00:00'))).to.equal("🌞");
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 07:00:00'))).to.equal("🌞");
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 09:00:00'))).to.equal("🌞");
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 12:00:00'))).to.equal("🌞");
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 14:00:00'))).to.equal("🌞");
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 17:59:59'))).to.equal("🌞");
    });
    it('should categorize night', function () {
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 18:00:00'))).to.equal("🌜");
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 21:00:00'))).to.equal("🌜");
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 22:00:00'))).to.equal("🌜");
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 24:00:00'))).to.equal("🌜");
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 00:00:00'))).to.equal("🌜");
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 04:00:00'))).to.equal("🌜");
      expect(timoji.dayOrNight(new Date('Jan 01, 2000 05:59:59'))).to.equal("🌜");
    });
  });
  describe('arrow', function () {
    it('should go down right', function () {
      expect(timoji.arrow(new Date('Jan 01, 2000 05:00:00'))).to.equal("↘️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:01:00'))).to.equal("↘️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:08:00'))).to.equal("↘️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:09:59'))).to.equal("↘️");
    });
    it('should go really down right', function () {
      expect(timoji.arrow(new Date('Jan 01, 2000 05:10:00'))).to.equal("↩️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:11:00'))).to.equal("↩️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:18:00'))).to.equal("↩️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:19:59'))).to.equal("↩️");
    });
    it('should go up right', function () {
      expect(timoji.arrow(new Date('Jan 01, 2000 05:20:00'))).to.equal("↗️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:21:00'))).to.equal("↗️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:28:00'))).to.equal("↗️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:29:59'))).to.equal("↗️");
    });
    it('should go up left', function () {
      expect(timoji.arrow(new Date('Jan 01, 2000 05:30:00'))).to.equal("↖️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:31:00'))).to.equal("↖️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:38:00'))).to.equal("↖️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:39:59'))).to.equal("↖️");
    });
    it('should go really down left', function () {
      expect(timoji.arrow(new Date('Jan 01, 2000 05:40:00'))).to.equal("↪️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:41:00'))).to.equal("↪️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:48:00'))).to.equal("↪️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:49:59'))).to.equal("↪️");
    });
    it('should go down left', function () {
      expect(timoji.arrow(new Date('Jan 01, 2000 05:50:00'))).to.equal("↙️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:51:00'))).to.equal("↙️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:58:00'))).to.equal("↙️");
      expect(timoji.arrow(new Date('Jan 01, 2000 05:59:59'))).to.equal("↙️");
    });
  });
  describe('number', function () {
    it('should work in 0-10', function () {
      expect(timoji.number(new Date('Jan 01, 2000 05:00:00'))).to.equal("0⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:01:00'))).to.equal("1⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:02:00'))).to.equal("2⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:03:00'))).to.equal("3⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:04:00'))).to.equal("4⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:05:00'))).to.equal("5⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:06:00'))).to.equal("6⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:07:00'))).to.equal("7⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:08:00'))).to.equal("8⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:09:00'))).to.equal("9⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:09:59'))).to.equal("9⃣");
    });
    it('should work in 10-20', function () {
      expect(timoji.number(new Date('Jan 01, 2000 05:10:00'))).to.equal("0⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:11:00'))).to.equal("1⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:12:00'))).to.equal("2⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:13:00'))).to.equal("3⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:14:00'))).to.equal("4⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:15:00'))).to.equal("5⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:16:00'))).to.equal("6⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:17:00'))).to.equal("7⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:18:00'))).to.equal("8⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:19:00'))).to.equal("9⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:19:59'))).to.equal("9⃣");
    });
    it('should work in 20-30', function () {
      expect(timoji.number(new Date('Jan 01, 2000 05:20:00'))).to.equal("🔟");
      expect(timoji.number(new Date('Jan 01, 2000 05:21:00'))).to.equal("9⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:22:00'))).to.equal("8⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:23:00'))).to.equal("7⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:24:00'))).to.equal("6⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:25:00'))).to.equal("5⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:26:00'))).to.equal("4⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:27:00'))).to.equal("3⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:28:00'))).to.equal("2⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:29:00'))).to.equal("1⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:29:59'))).to.equal("1⃣");
    });
    it('should work in 30-40', function () {
      expect(timoji.number(new Date('Jan 01, 2000 05:30:00'))).to.equal("0⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:31:00'))).to.equal("1⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:32:00'))).to.equal("2⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:33:00'))).to.equal("3⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:34:00'))).to.equal("4⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:35:00'))).to.equal("5⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:36:00'))).to.equal("6⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:37:00'))).to.equal("7⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:38:00'))).to.equal("8⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:39:00'))).to.equal("9⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:39:59'))).to.equal("9⃣");
    });
    it('should work in 40-50', function () {
      expect(timoji.number(new Date('Jan 01, 2000 05:40:00'))).to.equal("🔟");
      expect(timoji.number(new Date('Jan 01, 2000 05:41:00'))).to.equal("9⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:42:00'))).to.equal("8⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:43:00'))).to.equal("7⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:44:00'))).to.equal("6⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:45:00'))).to.equal("5⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:46:00'))).to.equal("4⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:47:00'))).to.equal("3⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:48:00'))).to.equal("2⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:49:00'))).to.equal("1⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:49:59'))).to.equal("1⃣");
    });
    it('should work in 50-60', function () {
      expect(timoji.number(new Date('Jan 01, 2000 05:50:00'))).to.equal("🔟");
      expect(timoji.number(new Date('Jan 01, 2000 05:51:00'))).to.equal("9⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:52:00'))).to.equal("8⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:53:00'))).to.equal("7⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:54:00'))).to.equal("6⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:55:00'))).to.equal("5⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:56:00'))).to.equal("4⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:57:00'))).to.equal("3⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:58:00'))).to.equal("2⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:59:00'))).to.equal("1⃣");
      expect(timoji.number(new Date('Jan 01, 2000 05:59:59'))).to.equal("1⃣");
    });
  });
});
