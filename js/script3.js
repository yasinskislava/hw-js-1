const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length / 2)] = "Класика";
console.log(styles[0]);
styles.shift();
styles.unshift("Реп", "Реггі");
console.log(styles);