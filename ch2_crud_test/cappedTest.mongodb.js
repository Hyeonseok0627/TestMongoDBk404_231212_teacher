use("testDB");
// 특정 크기의 컬렉션을 생성, 용량이 초과하면, 오래된 데이터 부터 삭제함. 확인.
db.createCollection("cappedC", { capped: true, size: 10000 });
db.cappedC.insertOne({ x: 1 });
db.cappedC.find();

// stats 조회, 컬렉션 이름 : cappedC, 상태 조회.
// use("testDB");
// db.cappedC.stats();

use("testDB");
for (i = 0; i < 1000; i++) {
  db.cappedC.insertOne({ x: i });
}

use("testDB");
// 앞에, 1 부터 646 까지 다 삭제됨.
// 오래된 데이텀.
db.cappedC.find();
