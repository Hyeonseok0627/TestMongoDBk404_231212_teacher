//use("test");
// find(<query>,<projection>)
// query : 조건부, projection : 보고 싶은 열
// 교차로내.accident_count" 이것만 보여주고, 나머지 열 안보여줘됨. -> 단, _id 는 제외.

db.by_road_type.find({ county: "강릉시" }, { "교차로내.accident_count": 1 });

// _id 제외해죠 select 교차로내.accident_count
db.by_road_type.find(
  { county: "강릉시" },
  { "교차로내.accident_count": 1, _id: 0 }
);

// 다보여줘. select *
db.by_road_type.find({ county: "강릉시" });
