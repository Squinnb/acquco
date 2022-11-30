export interface Book {
    no: string;
    name: string;
    title: string;
    year: string;
    magazine: string;
}

export const getBooks = (la: string) => {
 if(la === "ja") {
        return jaBooks
    }
    return enBooks
}


const jaBooks: Book[] = [{"no": "1", "year": "1935上", "name": "石川達三", "title": "蒼氓", "magazine": "星座"}, {"no": "2", "year": "1935下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "3", "year": "1936上", "name": "小田嶽夫", "title": "城外", "magazine": "文學生活"}, {"no": "3", "year": "1936上", "name": "鶴田知也", "title": "コシャマイン記", "magazine": "小説"}, {"no": "4", "year": "1936下", "name": "石川淳", "title": "普賢", "magazine": "作品"}, {"no": "4", "year": "1936下", "name": "冨澤有爲男", "title": "地中海", "magazine": "東陽"}, {"no": "5", "year": "1937上", "name": "尾崎一雄", "title": "暢氣眼鏡 他", "magazine": "人物評論"}, {"no": "6", "year": "1937下", "name": "火野葦平", "title": "糞尿譚", "magazine": "文學会議"}, {"no": "7", "year": "1938上", "name": "中山義秀", "title": "厚物咲", "magazine": "文學界"}, {"no": "8", "year": "1938下", "name": "中里恒子", "title": "乗合馬車 他", "magazine": "文學界"}, {"no": "9", "year": "1939上", "name": "半田義之", "title": "鶏騒動", "magazine": "文藝首都"}, {"no": "9", "year": "1939上", "name": "長谷健", "title": "あさくさの子供", "magazine": "虚實"}, {"no": "10", "year": "1939下", "name": "寒川光太郎", "title": "密獵者", "magazine": "創作"}, {"no": "11", "year": "1940上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "12", "year": "1940下", "name": "櫻田常久", "title": "平賀源内", "magazine": "作家精神"}, {"no": "13", "year": "1941上", "name": "多田裕計", "title": "長江デルタ", "magazine": "大陸往来"}, {"no": "14", "year": "1941下", "name": "芝木好子", "title": "青果の市", "magazine": "文芸首都"}, {"no": "15", "year": "1942上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "16", "year": "1942下", "name": "倉光俊夫", "title": "連絡員", "magazine": "正統"}, {"no": "17", "year": "1943上", "name": "石塚喜久三", "title": "纏足の頃", "magazine": "蒙疆文學"}, {"no": "18", "year": "1943下", "name": "東野邊薫", "title": "和紙", "magazine": "東北文學"}, {"no": "19", "year": "1944上", "name": "八木義徳", "title": "劉廣福", "magazine": "日本文學者"}, {"no": "20", "year": "1944下", "name": "清水基吉", "title": "雁立", "magazine": "日本文學者"}, {"no": "21", "year": "1949上", "name": "小谷剛", "title": "確証", "magazine": "作家"}, {"no": "21", "year": "1949上", "name": "由起しげ子", "title": "本の話", "magazine": "作品"}, {"no": "22", "year": "1949下", "name": "井上靖", "title": "闘牛", "magazine": "文學界"}, {"no": "23", "year": "1950上", "name": "辻亮一", "title": "異邦人", "magazine": "新小説"}, {"no": "24", "year": "1950下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "25", "year": "1951上", "name": "安部公房", "title": "壁", "magazine": "近代文学"}, {"no": "25", "year": "1951上", "name": "石川利光", "title": "春の草 他", "magazine": "文學界"}, {"no": "26", "year": "1951下", "name": "堀田善衛", "title": "広場の孤独・漢奸その他", "magazine": "中央公論他"}, {"no": "27", "year": "1952上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "28", "year": "1952下", "name": "五味康祐", "title": "喪神", "magazine": "新潮"}, {"no": "28", "year": "1952下", "name": "松本清張", "title": "或る「小倉日記」伝", "magazine": "三田文学"}, {"no": "29", "year": "1953上", "name": "安岡章太郎", "title": "悪い仲間・陰気な愉しみ", "magazine": "群像・新潮"}, {"no": "30", "year": "1953下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "31", "year": "1954上", "name": "吉行淳之介", "title": "驟雨・その他", "magazine": "文學界"}, {"no": "32", "year": "1954下", "name": "小島信夫", "title": "アメリカン・スクール", "magazine": "文學界"}, {"no": "32", "year": "1954下", "name": "庄野潤三", "title": "プールサイド小景", "magazine": "群像"}, {"no": "33", "year": "1955上", "name": "遠藤周作", "title": "白い人", "magazine": "近代文学"}, {"no": "34", "year": "1955下", "name": "石原慎太郎", "title": "太陽の季節", "magazine": "文學界"}, {"no": "35", "year": "1956上", "name": "近藤啓太郎", "title": "海人舟", "magazine": "文學界"}, {"no": "36", "year": "1956下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "37", "year": "1957上", "name": "菊村到", "title": "硫黄島", "magazine": "文學界"}, {"no": "38", "year": "1957下", "name": "開高健", "title": "裸の王様", "magazine": "文學界"}, {"no": "40", "year": "1958下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "41", "year": "1959上", "name": "斯波四郎", "title": "山塔", "magazine": "早稲田文学"}, {"no": "42", "year": "1959下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "43", "year": "1960上", "name": "北杜夫", "title": "夜と霧の隅で", "magazine": "新潮"}, {"no": "44", "year": "1960下", "name": "三浦哲郎", "title": "忍ぶ川", "magazine": "新潮"}, {"no": "45", "year": "1961上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "46", "year": "1961下", "name": "宇能鴻一郎", "title": "鯨神", "magazine": "文學界"}, {"no": "47", "year": "1962上", "name": "川村晃", "title": "美談の出発", "magazine": "文学街"}, {"no": "48", "year": "1962下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "49", "year": "1963上", "name": "後藤紀一", "title": "少年の橋", "magazine": "山形文学"}, {"no": "49", "year": "1963上", "name": "河野多惠子", "title": "蟹", "magazine": "文學界"}, {"no": "50", "year": "1963下", "name": "田辺聖子", "title": "感傷旅行 センチメンタル・ジャーニィ", "magazine": "航路"}, {"no": "51", "year": "1964上", "name": "柴田翔", "title": "されどわれらが日々──", "magazine": "象"}, {"no": "52", "year": "1964下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "53", "year": "1965上", "name": "津村節子", "title": "玩具", "magazine": "文學界"}, {"no": "54", "year": "1965下", "name": "高井有一", "title": "北の河", "magazine": "犀"}, {"no": "55", "year": "1966上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "56", "year": "1966下", "name": "丸山健二", "title": "夏の流れ", "magazine": "文學界"}, {"no": "57", "year": "1967上", "name": "大城立裕", "title": "カクテル・パーティー", "magazine": "新沖縄文学"}, {"no": "58", "year": "1967下", "name": "柏原兵三", "title": "徳山道助の帰郷", "magazine": "新潮"}, {"no": "59", "year": "1968上", "name": "丸谷才一", "title": "年の残り", "magazine": "文學界"}, {"no": "60", "year": "1968下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "61", "year": "1969上", "name": "庄司薫", "title": "赤頭巾ちゃん気をつけて", "magazine": "中央公論"}, {"no": "61", "year": "1969上", "name": "田久保英夫", "title": "深い河", "magazine": "新潮"}, {"no": "62", "year": "1969下", "name": "清岡卓行", "title": "アカシヤの大連", "magazine": "群像"}, {"no": "63", "year": "1970上", "name": "吉田知子", "title": "無明長夜", "magazine": "新潮"}, {"no": "63", "year": "1970上", "name": "古山高麗雄", "title": "プレオー8の夜明け", "magazine": "文藝"}, {"no": "64", "year": "1970下", "name": "古井由吉", "title": "杳子", "magazine": "文藝"}, {"no": "65", "year": "1971上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "66", "year": "1971下", "name": "李恢成", "title": "砧をうつ女", "magazine": "季刊芸術"}, {"no": "66", "year": "1971下", "name": "東峰夫", "title": "オキナワの少年", "magazine": "文學界"}, {"no": "67", "year": "1972上", "name": "畑山博", "title": "いつか汽笛を鳴らして", "magazine": "文學界"}, {"no": "67", "year": "1972上", "name": "宮原昭夫", "title": "誰かが触った", "magazine": "文藝"}, {"no": "68", "year": "1972下", "name": "山本道子", "title": "ベティさんの庭", "magazine": "新潮"}, {"no": "68", "year": "1972下", "name": "郷静子", "title": "れくいえむ", "magazine": "文學界"}, {"no": "69", "year": "1973上", "name": "三木卓", "title": "鶸", "magazine": "すばる"}, {"no": "70", "year": "1973下", "name": "野呂邦暢", "title": "草のつるぎ", "magazine": "文學界"}, {"no": "70", "year": "1973下", "name": "森敦", "title": "月山", "magazine": "季刊芸術"}, {"no": "71", "year": "1974上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "72", "year": "1974下", "name": "日野啓三", "title": "あの夕陽", "magazine": "新潮"}, {"no": "72", "year": "1974下", "name": "阪田寛夫", "title": "土の器", "magazine": "文學界"}, {"no": "73", "year": "1975上", "name": "林京子", "title": "祭りの場", "magazine": "群像"}, {"no": "74", "year": "1975下", "name": "中上健次", "title": "岬", "magazine": "文學界"}, {"no": "74", "year": "1975下", "name": "岡松和夫", "title": "志賀島", "magazine": "文學界"}, {"no": "75", "year": "1976上", "name": "村上龍", "title": "限りなく透明に近いブルー", "magazine": "群像"}, {"no": "76", "year": "1976下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "77", "year": "1977上", "name": "三田誠広", "title": "僕って何", "magazine": "文藝"}, {"no": "77", "year": "1977上", "name": "池田満寿夫", "title": "エーゲ海に捧ぐ", "magazine": "野性時代"}, {"no": "78", "year": "1977下", "name": "宮本輝", "title": "螢川", "magazine": "文芸展望"}, {"no": "78", "year": "1977下", "name": "高城修三", "title": "榧の木祭り", "magazine": "新潮"}, {"no": "79", "year": "1978上", "name": "高橋揆一郎", "title": "伸予", "magazine": "文藝"}, {"no": "80", "year": "1978下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "81", "year": "1979上", "name": "重兼芳子", "title": "やまあいの煙", "magazine": "文學界"}, {"no": "81", "year": "1979上", "name": "青野聰", "title": "愚者の夜", "magazine": "文學界"}, {"no": "82", "year": "1979下", "name": "森禮子", "title": "モッキングバードのいる町", "magazine": "新潮"}, {"no": "83", "year": "1980上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "84", "year": "1980下", "name": "尾辻克彦", "title": "父が消えた", "magazine": "文學界"}, {"no": "85", "year": "1981上", "name": "吉行理恵", "title": "小さな貴婦人", "magazine": "新潮"}, {"no": "86", "year": "1981下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "87", "year": "1982上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "88", "year": "1982下", "name": "加藤幸子", "title": "夢の壁", "magazine": "新潮"}, {"no": "88", "year": "1982下", "name": "唐十郎", "title": "佐川君からの手紙", "magazine": "文藝"}, {"no": "89", "year": "1983上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "90", "year": "1983下", "name": "笠原淳", "title": "杢二の世界", "magazine": "海燕"}, {"no": "90", "year": "1983下", "name": "高樹のぶ子", "title": "光抱く友よ", "magazine": "新潮"}, {"no": "91", "year": "1984上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "92", "year": "1984下", "name": "木崎さと子", "title": "青桐", "magazine": "文學界"}, {"no": "93", "year": "1985上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "94", "year": "1985下", "name": "米谷ふみ子", "title": "過越しの祭", "magazine": "新潮"}, {"no": "95", "year": "1986上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "96", "year": "1986下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "97", "year": "1987上", "name": "村田喜代子", "title": "鍋の中", "magazine": "文學界"}, {"no": "98", "year": "1987下", "name": "池澤夏樹", "title": "スティル・ライフ", "magazine": "中央公論"}, {"no": "98", "year": "1987下", "name": "三浦清宏", "title": "長男の出家", "magazine": "海燕"}, {"no": "100", "year": "1988下", "name": "南木佳士", "title": "ダイヤモンドダスト", "magazine": "文學界"}, {"no": "100", "year": "1988下", "name": "李良枝", "title": "由煕", "magazine": "群像"}, {"no": "101", "year": "1989上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "102", "year": "1989下", "name": "大岡玲", "title": "表層生活", "magazine": "文學界"}, {"no": "102", "year": "1989下", "name": "瀧澤美恵子", "title": "ネコババのいる町で", "magazine": "文學界"}, {"no": "103", "year": "1990上", "name": "辻原登", "title": "村の名前", "magazine": "文學界"}, {"no": "104", "year": "1990下", "name": "小川洋子", "title": "妊娠カレンダー", "magazine": "文學界"}, {"no": "105", "year": "1991上", "name": "辺見庸", "title": "自動起床装置", "magazine": "文學界"}, {"no": "105", "year": "1991上", "name": "荻野アンナ", "title": "背負い水", "magazine": "文學界"}, {"no": "106", "year": "1991下", "name": "松村栄子", "title": "至高聖所 アバトーン", "magazine": "海燕"}, {"no": "107", "year": "1992上", "name": "藤原智美", "title": "運転士", "magazine": "群像"}, {"no": "108", "year": "1992下", "name": "多和田葉子", "title": "犬婿入り", "magazine": "群像"}, {"no": "109", "year": "1993上", "name": "吉目木晴彦", "title": "寂寥郊野", "magazine": "群像"}, {"no": "110", "year": "1993下", "name": "奥泉光", "title": "石の来歴", "magazine": "文學界"}, {"no": "111", "year": "1994上", "name": "室井光広", "title": "おどるでく", "magazine": "群像"}, {"no": "111", "year": "1994上", "name": "笙野頼子", "title": "タイムスリップ・コンビナート", "magazine": "文學界"}, {"no": "112", "year": "1994下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "113", "year": "1995上", "name": "保坂和志", "title": "この人の閾", "magazine": "新潮"}, {"no": "114", "year": "1995下", "name": "又吉栄喜", "title": "豚の報い", "magazine": "文學界"}, {"no": "115", "year": "1996上", "name": "川上弘美", "title": "蛇を踏む", "magazine": "文學界"}, {"no": "116", "year": "1996下", "name": "辻仁成", "title": "海峡の光", "magazine": "新潮"}, {"no": "116", "year": "1996下", "name": "柳美里", "title": "家族シネマ", "magazine": "群像"}, {"no": "117", "year": "1997上", "name": "目取真俊", "title": "水滴", "magazine": "文學界"}, {"no": "118", "year": "1997下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "119", "year": "1998上", "name": "花村萬月", "title": "ゲルマニウムの夜", "magazine": "文學界"}, {"no": "120", "year": "1998下", "name": "平野啓一郎", "title": "日蝕", "magazine": "新潮"}, {"no": "121", "year": "1999上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "122", "year": "1999下", "name": "玄月", "title": "蔭の棲みか", "magazine": "文學界"}, {"no": "122", "year": "1999下", "name": "藤野千夜", "title": "夏の約束", "magazine": "群像"}, {"no": "123", "year": "2000上", "name": "町田康", "title": "きれぎれ", "magazine": "文學界"}, {"no": "123", "year": "2000上", "name": "松浦寿輝", "title": "花腐し", "magazine": "群像"}, {"no": "124", "year": "2000下", "name": "青来有一", "title": "聖水", "magazine": "文學界"}, {"no": "124", "year": "2000下", "name": "堀江敏幸", "title": "熊の敷石", "magazine": "群像"}, {"no": "125", "year": "2001上", "name": "玄侑宗久", "title": "中陰の花", "magazine": "文學界"}, {"no": "126", "year": "2001下", "name": "長嶋有", "title": "猛スピードで母は", "magazine": "文學界"}, {"no": "127", "year": "2002上", "name": "吉田修一", "title": "パーク・ライフ", "magazine": "文學界"}, {"no": "128", "year": "2002下", "name": "大道珠貴", "title": "しょっぱいドライブ", "magazine": "文學界"}, {"no": "129", "year": "2003上", "name": "吉村萬壱", "title": "ハリガネムシ", "magazine": "文學界"}, {"no": "130", "year": "2003下", "name": "金原ひとみ", "title": "蛇にピアス", "magazine": "すばる"}, {"no": "130", "year": "2003下", "name": "綿矢りさ", "title": "蹴りたい背中", "magazine": "文藝"}, {"no": "131", "year": "2004上", "name": "モブ・ノリオ", "title": "介護入門", "magazine": "文學界"}, {"no": "132", "year": "2004下", "name": "阿部和重", "title": "グランド･フィナーレ", "magazine": "群像"}, {"no": "133", "year": "2005上", "name": "中村文則", "title": "土の中の子供", "magazine": "新潮"}, {"no": "134", "year": "2005下", "name": "絲山秋子", "title": "沖で待つ", "magazine": "文學界"}, {"no": "135", "year": "2006上", "name": "伊藤たかみ", "title": "八月の路上に捨てる", "magazine": "文學界"}, {"no": "136", "year": "2006下", "name": "青山七恵", "title": "ひとり日和", "magazine": "文藝"}, {"no": "137", "year": "2007上", "name": "諏訪哲史", "title": "アサッテの人", "magazine": "群像"}, {"no": "138", "year": "2007下", "name": "川上未映子", "title": "乳と卵", "magazine": "文學界"}, {"no": "140", "year": "2008下", "name": "津村記久子", "title": "ポトスライムの舟", "magazine": "群像"}, {"no": "141", "year": "2009上", "name": "磯崎憲一郎", "title": "終の住処", "magazine": "新潮"}, {"no": "142", "year": "2009下", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "143", "year": "2010上", "name": "赤染晶子", "title": "乙女の密告", "magazine": "新潮"}, {"no": "144", "year": "2010下", "name": "朝吹真理子", "title": "きことわ", "magazine": "新潮"}, {"no": "144", "year": "2010下", "name": "西村賢太", "title": "苦役列車", "magazine": "新潮"}, {"no": "145", "year": "2011上", "name": "なし", "title": "なし", "magazine": "なし"}, {"no": "146", "year": "2011下", "name": "円城塔", "title": "道化師の蝶", "magazine": "群像"}, {"no": "146", "year": "2011下", "name": "田中慎弥", "title": "共喰い", "magazine": "すばる"}, {"no": "147", "year": "2012上", "name": "鹿島田真希", "title": "冥土めぐり", "magazine": "文藝"}, {"no": "148", "year": "2012下", "name": "黒田夏子", "title": "ａｂさんご", "magazine": "早稲田文学"}, {"no": "149", "year": "2013上", "name": "藤野可織", "title": "爪と目", "magazine": "新潮"}, {"no": "150", "year": "2013下", "name": "小山田浩子", "title": "穴", "magazine": "新潮"}, {"no": "151", "year": "2014上", "name": "柴崎友香", "title": "春の庭", "magazine": "文學界"}, {"no": "152", "year": "2014下", "name": "小野正嗣", "title": "九年前の祈り", "magazine": "群像"}, {"no": "153", "year": "2015上", "name": "羽田圭介", "title": "スクラップ・アンド・ビルド", "magazine": "文學界"}, {"no": "153", "year": "2015上", "name": "又吉直樹", "title": "火花", "magazine": "文學界"}, {"no": "154", "year": "2015下", "name": "滝口悠生", "title": "死んでいない者", "magazine": "文學界"}, {"no": "154", "year": "2015下", "name": "本谷有希子", "title": "異類婚姻譚（いるいこんいんたん）", "magazine": "群像"}, {"no": "155", "year": "2016上", "name": "村田沙耶香", "title": "コンビニ人間", "magazine": "文學界"}, {"no": "156", "year": "2016下", "name": "山下澄人", "title": "しんせかい", "magazine": "新潮"}, {"no": "157", "year": "2017上", "name": "沼田真佑", "title": "影裏（えいり）", "magazine": "文學界"}, {"no": "158", "year": "2017下", "name": "若竹千佐子", "title": "おらおらでひとりいぐも", "magazine": "文藝"}, {"no": "158", "year": "2017下", "name": "石井遊佳", "title": "百年泥", "magazine": "新潮"}, {"no": "160", "year": "2018下", "name": "町屋良平", "title": "1R（いちらうんど）1分34秒", "magazine": "新潮"}, {"no": "160", "year": "2018下", "name": "上田岳弘", "title": "ニムロッド", "magazine": "群像"}, {"no": "161", "year": "2019上", "name": "今村夏子", "title": "むらさきのスカートの女", "magazine": "小説トリッパー"}, {"no": "162", "year": "2019下", "name": "古川真人", "title": "背高泡立草（せいたかあわだちそう）", "magazine": "すばる"}, {"no": "163", "year": "2020上", "name": "遠野遥", "title": "破局", "magazine": "文藝"},  {"no": "164", "year": "2020上", "name": "遠野遥", "title": "破局", "magazine": "文藝"},  {"no": "165", "year": "2020下", "name": "宇佐見 りん", "title": "推し、燃ゆ", "magazine": "..."},  {"no": "166", "year": "2021下", "name": "砂川文次", "title": "ラックボックス", "magazine": "..."},  {"no": "167", "year": "2022上", "name": " 高瀬隼子", "title": "おいしいごはんが食べられますように", "magazine": "..."}]

const enBooks: Book[] = [{"no": "1", "name": "Tatsuzō Ishikawa", "title": "Sōbō", "magazine": "Seiza", "year": "1935上"}, {"no": "2", "title": "None", "name": "None", "magazine": "None", "year": "1935下"}, {"no": "3", "name": "Takeo Oda", "title": "Jōgai, Koshamain-Ki", "magazine": "Bungaku Seikatsu, Shōsetsu", "year": "1936上"}, {"no": "4", "name": "Jun Ishikawa", "title": "The Bodhisattva, or, Samantabhadra, Chichūkai", "magazine": "Fugen, Tōyō", "year": "1936下"}, {"no": "5", "name": "Kazuo Ozaki", "title": "Rosy Glasses", "magazine": "Nonki Megane", "year": "1937上"}, {"no": "6", "name": "Ashihei Hino", "title": "Fun'nyōtan", "magazine": "Bungaku Kaigi", "year": "1937下"}, {"no": "7", "name": "Gishū Nakayama", "title": "Atsumonozaki", "magazine": "Bungakukai", "year": "1938上"}, {"no": "8", "name": "Tsuneko Nakazato", "title": "Noriaibasha, ta", "magazine": "check", "year": "1938下"}, {"no": "9", "name": "Yoshiyuki Handa", "title": "Niwatori Sōdō, Asakusa no Kodomo", "magazine": "Bungei Shuto, check", "year": "1939上"}, {"no": "10", "name": "Kōtarō Samukawa", "title": "Mitsuryōsha", "magazine": "Sōsaku", "year": "1939下"}, {"no": "11", "name": "Takagi Taku", "title": "Uta to mon no tate", "magazine": "check", "year": "1940上"}, {"no": "12", "name": "Tsunehisa Sakurada", "title": "Hiraga Gen'nai", "magazine": "Sakka Seishin", "year": "1940下"}, {"no": "13", "name": "Yūkei Tada", "title": "Chōkō Deruta", "magazine": "Tairiku Ōrai", "year": "1941上"}, {"no": "14", "name": "Yoshiko Shibaki", "title": "Seika no Ichi", "magazine": "Bungei Shuto", "year": "1941下"}, {"no": "15", "title": "None", "name": "None", "magazine": "None", "year": "1942上"}, {"no": "16", "name": "Toshio Kuramitsu", "title": "Renrakuin", "magazine": "Seitō", "year": "1942下"}, {"no": "17", "name": "Kikuzō Ishizuka", "title": "Tensoku no Koro", "magazine": "Mōkyō Bungaku", "year": "1943上"}, {"no": "18", "name": "Kaoru Tōnobe", "title": "Washi", "magazine": "Tōhoku Bungaku", "year": "1943下"}, {"no": "19", "name": "Yoshinori Yagi", "title": "Ryū Kanfū, Tōhan", "magazine": "Nihon Bungakusha, Kokumin Bungaku", "year": "1944上"}, {"no": "20", "name": "Motoyoshi Shimizu", "title": "Karitachi", "magazine": "Nihon Bungakusha", "year": "1944下"}, {"no": "21", "name": "Tsuyoshi Kotani", "title": "Kakushō, Hon no Hanashi", "magazine": "Sakka, Sakuhin", "year": "1949上"}, {"no": "22", "name": "Yasushi Inoue", "title": "Bullfight", "magazine": "Tōgyū", "year": "1949下"}, {"no": "23", "name": "Ryōichi Tsuji", "title": "Ihōjin", "magazine": "Shin Shōsetsu", "year": "1950上"}, {"no": "24", "title": "None", "name": "None", "magazine": "None", "year": "1950下"}, {"no": "25", "name": "Kōbō Abe", "title": "The Wall — The Crime of S. Karma, Haru no Kusa", "magazine": "Kabe—S. Karuma shi no Hanzai, Bungakukai", "year": "1951上"}, {"no": "26", "name": "Yoshie Hotta", "title": "Hiroba no Kodoku, Kankan, sono ta", "magazine": "Chūōkōron", "year": "1951下"}, {"no": "27", "title": "None", "name": "None", "magazine": "None", "year": "1952上"}, {"no": "28", "name": "Kōsuke Gomi", "title": "Sōshin, Aru \"Kokura Nikki\" Den", "magazine": "Shinchō, Mita Bungaku", "year": "1952下"}, {"no": "29", "name": "Shōtarō Yasuoka", "title": "Bad Company, Inki na Tanoshimi", "magazine": "Warui Nakama, Shinchō", "year": "1953上"}, {"no": "30", "title": "None", "name": "None", "magazine": "None", "year": "1953下"}, {"no": "31", "name": "Junnosuke Yoshiyuki", "title": "Sudden Shower", "magazine": "Shūu, sono ta", "year": "1954上"}, {"no": "32", "name": "Nobuo Kojima", "title": "The American School, Evenings at the Pool", "magazine": "Amerikan Sukūru, Pūrusaido Shōkei", "year": "1954下"}, {"no": "33", "name": "Shūsaku Endō", "title": "White Man", "magazine": "Shiroi Hito", "year": "1955上"}, {"no": "34", "name": "Shintarō Ishihara", "title": "Season of Violence", "magazine": "Taiyō no Kisetsu", "year": "1955下"}, {"no": "35", "name": "Keitarō Kondō", "title": "Amabune", "magazine": "check", "year": "1956上"}, {"no": "36", "title": "None", "name": "None", "magazine": "None", "year": "1956下"}, {"no": "37", "name": "Itaru Kikumura", "title": "Iōjima", "magazine": "Bungakukai", "year": "1957上"}, {"no": "38", "name": "Takeshi Kaikō", "title": "Hadaka no Ōsama", "magazine": "check", "year": "1957下"}, {"no": "39", "name": "Kenzaburō Ōe", "title": "Prize Stock", "magazine": "Shiiku", "year": "1958上"}, {"no": "40", "title": "None", "name": "None", "magazine": "None", "year": "1958下"}, {"no": "41", "name": "Shirō Shiba", "title": "Santō", "magazine": "Waseda Bungaku", "year": "1959上"}, {"no": "42", "title": "None", "name": "None", "magazine": "None", "year": "1959下"}, {"no": "43", "name": "Morio Kita", "title": "Yoru to Kiri no Sumi de", "magazine": "Shinchō", "year": "1960上"}, {"no": "44", "name": "Tetsuo Miura", "title": "Shinobukawa", "magazine": "check", "year": "1960下"}, {"no": "45", "title": "None", "name": "None", "magazine": "None", "year": "1961上"}, {"no": "46", "name": "Kōichirō Uno", "title": "Kujiragami", "magazine": "Bungakukai", "year": "1961下"}, {"no": "47", "name": "Akira Kawamura", "title": "Bidan no Shuppatsu", "magazine": "Bungakugai", "year": "1962上"}, {"no": "48", "title": "None", "name": "None", "magazine": "None", "year": "1962下"}, {"no": "49", "name": "Kiichi Gotō", "title": "Shōnen no Hashi, Crabs", "magazine": "Yamagata Bungaku, Kani", "year": "1963上"}, {"no": "50", "name": "Seiko Tanabe", "title": "Kanshō Ryokō (Senchimentaru Jāni)", "magazine": "Kōro", "year": "1963下"}, {"no": "51", "name": "Shō Shibata", "title": "Saredo Wareraga Hibi", "magazine": "Zō", "year": "1964上"}, {"no": "52", "title": "None", "name": "None", "magazine": "None", "year": "1964下"}, {"no": "53", "name": "Setsuko Tsumura", "title": "Gangu", "magazine": "Bungakukai", "year": "1965上"}, {"no": "54", "name": "Yūichi Takai", "title": "Kita no Kawa", "magazine": "Sai", "year": "1965下"}, {"no": "55", "title": "None", "name": "None", "magazine": "None", "year": "1966上"}, {"no": "56", "name": "Kenji Maruyama", "title": "Natsu no Nagare", "magazine": "Bungakukai", "year": "1966下"}, {"no": "57", "name": "Tatsuhiro Ōshiro", "title": "The Cocktail Party", "magazine": "Kakuteru Pātī", "year": "1967上"}, {"no": "58", "name": "Hyōzō Kashiwabara", "title": "Tokuyama Dōsuke no Kikyō", "magazine": "Shinchō", "year": "1967下"}, {"no": "59", "name": "Saiichi Maruya", "title": "Toshi no Nokori, The Three Crabs", "magazine": "Bungakukai, Sanbiki no Kani", "year": "1968上"}, {"no": "60", "title": "None", "name": "None", "magazine": "None", "year": "1968下"}, {"no": "61", "name": "Kaoru Shōji", "title": "Akazukin-chan Ki o Tsukete, Fukai Kawa", "magazine": "Chūōkōron, Shinchō", "year": "1969上"}, {"no": "62", "name": "Takayuki Kiyooka", "title": "Akashiya no Dairen", "magazine": "Gunzō", "year": "1969下"}, {"no": "63", "name": "Tomoko Yoshida", "title": "Mumyōjōya, Pureō 8 no Yoake", "magazine": "Shinchō, Bungei", "year": "1970上"}, {"no": "64", "name": "Yoshikichi Furui", "title": "Yoko", "magazine": "Yōko", "year": "1970下"}, {"no": "65", "title": "None", "name": "None", "magazine": "None", "year": "1971上"}, {"no": "66", "name": "Kaisei Ri", "title": "Kinuta o Utsu Onna, Child of Okinawa", "magazine": "Kikan Geijutsu, Okinawa no Shōnen", "year": "1971下"}, {"no": "67", "name": "Hiroshi Hatayama", "title": "Itsuka Kiteki o Narashite, Dareka ga Sawatta", "magazine": "check, Bungei", "year": "1972上"}, {"no": "68", "name": "Michiko Yamamoto", "title": "Betty's Garden, Requiem", "magazine": "Betei-san no Niwa, Rekuiemu", "year": "1972下"}, {"no": "69", "name": "Taku Miki", "title": "Hiwa", "magazine": "Subaru", "year": "1973上"}, {"no": "70", "name": "Kuninobu Noro", "title": "Kusa no Tsurugi, Gassan", "magazine": "Bungakukai, Kikan Geijutsu", "year": "1973下"}, {"no": "71", "title": "None", "name": "None", "magazine": "None", "year": "1974上"}, {"no": "72", "name": "Keizō Hino", "title": "Ano Yūhi, Tsuchi no Utsuwa", "magazine": "Shinchō, Bungakukai", "year": "1974下"}, {"no": "73", "name": "Kyōko Hayashi", "title": "Ritual of Death", "magazine": "Matsuri no Ba", "year": "1975上"}, {"no": "74", "name": "Kenji Nakagami", "title": "The Cape, Shikanoshima", "magazine": "Misaki, check", "year": "1975下"}, {"no": "75", "name": "Ryū Murakami", "title": "Almost Transparent Blue", "magazine": "Kagirinaku Tōmei ni Chikai Burū", "year": "1976上"}, {"no": "76", "title": "None", "name": "None", "magazine": "None", "year": "1976下"}, {"no": "77", "name": "Masahiro Mita", "title": "Bokutte Nani, Ēgekai ni Sasagu", "magazine": "Bungei, Shōsetsu Yasei Jidai", "year": "1977上"}, {"no": "78", "name": "Teru Miyamoto", "title": "River of Fireflies, Kaya no Ki Matsuri", "magazine": "Hotarugawa, Shinchō", "year": "1977下"}, {"no": "79", "name": "Kiichirō Takahashi", "title": "Nobuyo, Kugatsu no Sora", "magazine": "Bungei, check", "year": "1978上"}, {"no": "80", "title": "None", "name": "None", "magazine": "None", "year": "1978下"}, {"no": "81", "name": "Yoshiko Shigekane", "title": "The Smoke in the Mountain Valley, Gusha no Yoru", "magazine": "Yamaai no Kemuri, check", "year": "1979上"}, {"no": "82", "name": "Reiko Mori", "title": "Mokkingubādo no Iru Machi", "magazine": "Shinchō", "year": "1979下"}, {"no": "83", "title": "None", "name": "None", "magazine": "None", "year": "1980上"}, {"no": "84", "name": "Katsuhiko Otsuji", "title": "Chichi ga Kieta", "magazine": "Bungakukai", "year": "1980下"}, {"no": "85", "name": "Rie Yoshiyuki", "title": "Chisana Kifujin", "magazine": "Shinchō", "year": "1981上"}, {"no": "86", "title": "None", "name": "None", "magazine": "None", "year": "1981下"}, {"no":"?","title": "None", "name": "None", "magazine": "None", "year": "1982上"}, {"no": "88", "name": "Yukiko Katō", "title": "Yume no Kabe, Sagawa-kun Kara no Tegami", "magazine": "Shinchō, Bungei", "year": "1982下"}, {"no": "89", "title": "None", "name": "None", "magazine": "None", "year": "1983上"}, {"no": "90", "name": "Jun Kasahara", "title": "Mokuji no Sekai, Hikari Idaku Tomo yo", "magazine": "Kaien, Shinchō", "year": "1983下"}, {"no": "91", "title": "None", "name": "None", "magazine": "None", "year": "1984上"}, {"no": "92", "name": "Satoko Kizaki", "title": "The Phoenix Tree", "magazine": "Aogiri", "year": "1984下"}, {"no": "93", "title": "None", "name": "None", "magazine": "None", "year": "1985上"}, {"no": "94", "name": "Fumiko Kometani", "title": "Passover", "magazine": "Sugikoshi no matsuri", "year": "1985下"}, {"no": "95", "title": "None", "name": "None", "magazine": "None", "year": "1986上"}, {"no":"?","title": "None", "name": "None", "magazine": "None", "year": "1986下"}, {"no": "97", "name": "Kiyoko Murata", "title": "Nabe no Naka", "magazine": "Bungakukai", "year": "1987上"}, {"no": "98", "name": "Natsuki Ikezawa", "title": "Still Life, He's Leaving Home: My Young Son Becomes a Zen Monk", "magazine": "Sutiru Raifu, Chōnan no Shukke", "year": "1987下"}, {"no": "99", "name": "Man Arai", "title": "Tazunebito no Jikan", "magazine": "Bungakukai", "year": "1988上"}, {"no": "100", "name": "Keishi Nagi", "title": "Daiyamondo Dasuto, Yuhi", "magazine": "check, Gunzō", "year": "1988下"}, {"no": "101", "title": "None", "name": "None", "magazine": "None", "year": "1989上"}, {"no": "102", "name": "Akira Ōoka", "title": "Hyōsō Seikatsu, Nekobaba no Iru Machi de", "magazine": "Bungakukai, check", "year": "1989下"}, {"no": "103", "name": "Noboru Tsujihara", "title": "Mura no Namae", "magazine": "check", "year": "1990上"}, {"no": "104", "name": "Yōko Ogawa", "title": "Pregnancy Diary", "magazine": "Ninshin Karendā", "year": "1990下"}, {"no": "105", "name": "Yō Henmi", "title": "Jidō Kishō Sōchi, Seoimizu", "magazine": "check, check", "year": "1991上"}, {"no": "106", "name": "Eiko Matsumura", "title": "Shikō Seisho Apatōn", "magazine": "Kaien", "year": "1991下"}, {"no": "107", "name": "Tomomi Fujiwara", "title": "Untenshi", "magazine": "Gunzō", "year": "1992上"}, {"no": "108", "name": "Yōko Tawada", "title": "The Bridegroom Was a Dog", "magazine": "Inu mukoiri", "year": "1992下"}, {"no": "109", "name": "Haruhiko Yoshimeki", "title": "Sekiryō Kōya", "magazine": "check", "year": "1993上"}, {"no": "110", "name": "Hikaru Okuizumi", "title": "The Stones Cry Out", "magazine": "Ishi no Raireki", "year": "1993下"}, {"no": "111", "name": "Mitsuhiro Muroi", "title": "Odorudeku, Taimu Surippu Konbināto", "magazine": "Gunzō, Bungakukai", "year": "1994上"}, {"no": "112", "title": "None", "name": "None", "magazine": "None", "year": "1994下"}, {"no": "113", "name": "Kazushi Hosaka", "title": "Kono Hito no Iki", "magazine": "Shinchō", "year": "1995上"}, {"no": "114", "name": "Eiki Matayoshi", "title": "Buta no Mukui", "magazine": "Bungakukai", "year": "1995下"}, {"no": "115", "name": "Hiromi Kawakami", "title": "Hebi o Fumu", "magazine": "check", "year": "1996上"}, {"no": "116", "name": "Hitonari Tsuji", "title": "Kaikyō no Hikari, Kazoku Shinema", "magazine": "Shinchō, Gunzō", "year": "1996下"}, {"no": "117", "name": "Shun Medoruma", "title": "Droplets", "magazine": "Suiteki", "year": "1997上"}, {"no": "118", "title": "None", "name": "None", "magazine": "None", "year": "1997下"}, {"no": "119", "name": "Mangetsu Hanamura", "title": "Gerumaniamu no Yoru, Buenosu Airesu Gozen Reiji", "magazine": "Bungakukai, Bungei", "year": "1998上"}, {"no": "120", "name": "Keiichirō Hirano", "title": "Nisshoku", "magazine": "Shinchō", "year": "1998下"}, {"no": "121", "title": "None", "name": "None", "magazine": "None", "year": "1999上"}, {"no": "122", "name": "Gen Getsu", "title": "Kage no Sumika, Natsu no Yakusoku", "magazine": "Bungakukai, Gunzō", "year": "1999下"}, {"no": "123", "name": "Kō Machida", "title": "Kiregire, Hana Kutashi", "magazine": "Bungakukai, Gunzō", "year": "2000上"}, {"no": "124", "name": "Yūichi Seirai", "title": "Seisui, The Bear and the Paving Stone", "magazine": "Bungakukai, Kuma no Shikiishi", "year": "2000下"}, {"no": "125", "name": "Sōkyū Gen'yū", "title": "Chūin no Hana", "magazine": "Bungakukai", "year": "2001上"}, {"no": "126", "name": "Yū Nagashima", "title": "Mō-Supīdo de Haha wa", "magazine": "check", "year": "2001下"}, {"no": "127", "name": "Shūichi Yoshida", "title": "Pāku Raifu", "magazine": "check", "year": "2002上"}, {"no": "128", "name": "Tamaki Daidō", "title": "Shoppai Doraibu", "magazine": "check", "year": "2002下"}, {"no": "129", "name": "Man'ichi Yoshimura", "title": "Hariganemushi", "magazine": "check", "year": "2003上"}, {"no": "130", "name": "Hitomi Kanehara", "title": "Snakes and Earrings, I Want to Kick You in the Back", "magazine": "Hebi ni Piasu, Keritai Senaka", "year": "2003下"}, {"no": "131", "name": "Norio Mobu", "title": "Kaigo Nyūmon", "magazine": "Bungakukai", "year": "2004上"}, {"no": "132", "name": "Kazushige Abe", "title": "Gurando Fināre", "magazine": "Gunzō", "year": "2004下"}, {"no": "133", "name": "Fuminori Nakamura", "title": "The Boy in the Earth", "magazine": "Tsuchi no Naka no Kodomo", "year": "2005上"}, {"no": "134", "name": "Akiko Itoyama", "title": "Waiting in the Offing", "magazine": "Oki de Matsu", "year": "2005下"}, {"no": "135", "name": "Takami Itō", "title": "Hachigatsu no Rojō ni Suteru", "magazine": "check", "year": "2006上"}, {"no": "136", "name": "Nanae Aoyama", "title": "Hitori Biyori", "magazine": "Bungei", "year": "2006下"}, {"no": "137", "name": "Tetsushi Suwa", "title": "Asatte no Hito", "magazine": "Gunzō", "year": "2007上"}, {"no": "138", "name": "Mieko Kawakami", "title": "Breasts and Eggs", "magazine": "Chichi to Ran", "year": "2007下"}, {"no": "139", "name": "Yang Yi", "title": "Toki ga Nijimu Asa", "magazine": "check", "year": "2008上"}, {"no": "140", "name": "Kikuko Tsumura", "title": "Potosu Raimu no Fune", "magazine": "Gunzō", "year": "2008下"}, {"no": "141", "name": "Ken'ichirō Isozaki", "title": "Tsui no Sumika", "magazine": "Shinchō", "year": "2009上"}, {"no": "142", "title": "None", "name": "None", "magazine": "None", "year": "2009下"}, {"no": "143", "name": "Akiko Akazome", "title": "Otome no Mikkoku", "magazine": "Shinchō", "year": "2010上"}, {"no": "144", "name": "Mariko Asabuki", "title": "Kikotowa, Kueki Ressha", "magazine": "check, check", "year": "2010下"}, {"no": "145", "title": "None", "name": "None", "magazine": "None", "year": "2011上"}, {"no": "146", "name": "Toh EnJoe", "title": "Harlequin's Butterfly, Tomogui", "magazine": "Dōkeshi no Chō, Subaru", "year": "2011下"}, {"no": "147", "name": "Maki Kashimada", "title": "Touring the Land of the Dead", "magazine": "Meido Meguri", "year": "2012上"}, {"no": "148", "name": "Natsuko Kuroda", "title": "ab Sango", "magazine": "Waseda Bungaku", "year": "2012下"}, {"no": "149", "name": "Kaori Fujino", "title": "Tsume to Me", "magazine": "Shinchō", "year": "2013上"}, {"no": "150", "name": "Hiroko Oyamada", "title": "The Hole", "magazine": "Ana", "year": "2013下"}, {"no": "151", "name": "Tomoka Shibasaki", "title": "Spring Garden", "magazine": "Haru no Niwa", "year": "2014上"}, {"no": "152", "name": "Masatsugu Ono", "title": "Kyūnenmae no Inori", "magazine": "Gunzō", "year": "2014下"}, {"no": "153", "name": "Keisuke Hada", "title": "Sukurappu Ando Birudo, Spark", "magazine": "Bungakukai, Hibana", "year": "2015上"}, {"no": "154", "name": "Yūshō Takiguchi", "title": "Shinde Inai Mono, Irui Konin Tan", "magazine": "check, Gunzō", "year": "2015下"}, {"no": "155", "name": "Sayaka Murata", "title": "Convenience Store Woman", "magazine": "Konbini Ningen", "year": "2016上"}, {"no": "156", "name": "Sumito Yamashita", "title": "Shinsekai", "magazine": "Shinchō", "year": "2016下"}, {"no": "157", "name": "Shinsuke Numata", "title": "Eiri", "magazine": "Bungakukai", "year": "2017上"}, {"no": "158", "name": "Chisako Wakatake", "title": "Ora Ora de Hitori Igumo, Hyakunen Doro", "magazine": "Bungei, Shinchō", "year": "2017下"}, {"no": "159", "name": "Hiroki Takahashi", "title": "Okuribi", "magazine": "Bungakukai", "year": "2018上"}, {"no": "160", "name": "Ryōhei Machiya", "title": "1R 1-Pun 34-Byō, Nimuroddo", "magazine": "Shinchō, Gunzō", "year": "2018下"}, {"no": "161", "name": "Natsuko Imamura", "title": "Murasaki no Sukāto no Onna", "magazine": "Shōsetsu Tripper", "year": "2019上"}, {"no": "162", "name": "Makoto Furukawa", "title": "Seitaka Awadachisō", "magazine": "Subaru", "year": "2019下"}, {"no": "163", "name": "Haruka Tono", "title": "Hakyoku, Shuri no Uma", "magazine": "Bungei, Shinchō", "year": "2020上"}, {"no": "164", "name": "Rin Usami", "title": "Oshi, Moyu", "magazine": "Bungei", "year": "2020下"}, {"no": "165", "name": "Li Kotomi", "title": "Higanbana ga saku shima, Kai ni tsudzuku basho nite", "magazine": "Bungakukai, Gunzō", "year": "2021上"}, {"no": "166", "name": "Bunji Sunakawa", "title": "Black Box", "magazine": "Gunzō", "year": "2021下"}, {"no": "167", "name": "Junko Takase", "title": "Oishii Gohan ga Taberaremasuyōni", "magazine": "Gunzō", "year": "2022上"}]