'use client'

const data = [
    {
        "ジャンル": "結婚指輪",
        "お店の名前": "VANILLA福山本店",
        "お店のサービス": "結婚指輪",
        "お得なサービス": "10%OFF",
        "ホームページ": null
    },
    {
        "ジャンル": "結婚式場",
        "お店の名前": "ウエディングパルコアルジェント",
        "お店のサービス": "結婚式場",
        "お得なサービス": "不明",
        "ホームページ": null
    },
    {
        "ジャンル": "ウエディングフォト・ムービー",
        "お店の名前": "セトオト",
        "お店のサービス": "ウエディングフォト・ムービー",
        "お得なサービス": "ウエディングムービー10,000円引き",
        "ホームページ": "https://youtu.be/hdsHxsXxabo"
    },
    {
        "ジャンル": "サロン",
        "お店の名前": "salon.lampu.（サロン ランプ）",
        "お店のサービス": "女性ホルモンを整える（小顔ヘッドスパ、バストケア、ヒップケアなど）",
        "お得なサービス": "【毎回】バストアップ60分1,600円引き（入会から3か月以内のみ）",
        "ホームページ": "https://www.instagram.com/salon.lampu.2024/"
    },
    {
        "ジャンル": "サロン",
        "お店の名前": "MYKITT FUKUYAMA（マイキット 福山）",
        "お店のサービス": "本物の総合美をご提案（内面美、外面美、心面美）",
        "お得なサービス": "【初回】エステティック、個性診断、運勢診断無料チケットプレゼント 各500円OFF",
        "ホームページ": "https://www.mykitt.com/salon/"
    }
];

const data2 = [
    {
        "ジャンル": "ウェディング",
        "お店の名前": "結婚指輪VANILLA福山本店",
        "お店のサービス": "結婚指輪",
        "お得なサービス": "10%OFF",
        "ホームページ": null
    },
    {
        "ジャンル": "ウェディング",
        "お店の名前": "ウエディングパルコアルジェント",
        "お店のサービス": "結婚式場",
        "お得なサービス": null,
        "ホームページ": null
    },
    {
        "ジャンル": "ウェディング",
        "お店の名前": "セトオト",
        "お店のサービス": "ウエディングフォト・ムービー",
        "お得なサービス": "ウエディングムービー10,000円引き",
        "ホームページ": "https://whizmedia-wedding.com/"
    },
    {
        "ジャンル": "ビューティー",
        "お店の名前": "salon.lampu.（サロン ランプ）",
        "お店のサービス": "女性ホルモンを整える（小顔ヘッドスパ、バストケア、ヒップケアなど）",
        "お得なサービス": "【毎回】バストアップ60分1,600円引き（入会から3か月以内のみ）、【毎回】ヒップケア80分1,600円引き（入会から3か月以内のみ）",
        "ホームページ": "https://www.instagram.com/salon.lampu.2024/"
    },
    {
        "ジャンル": "ビューティー",
        "お店の名前": "MYKITT FUKUYAMA（マイキット 福山）",
        "お店のサービス": "本物の総合美をご提案（内面美、外面美、心面美）",
        "お得なサービス": "【初回】エステティック、個性診断、運勢診断無料チケットプレゼント 各500円オプション（相性診断・深層心理・エステティック）",
        "ホームページ": "https://www.mykitt.com/salon/"
    },
    {
        "ジャンル": "ビューティー",
        "お店の名前": "YOSA PARK Larimar（ヨサパーク ラリマー）",
        "お店のサービス": "全身丸ごと痩身【短期集中】（小顔、美肌、体質改善、むくみ、くすみ、冷え性、妊活、温活）",
        "お得なサービス": "【初回】10,000円コース➡6,800円 他コースもホットペッパー初回特典より1,000円引き",
        "ホームページ": "https://kireistyle-woman.com/salon/store/H000558845"
    },
    {
        "ジャンル": "ビューティー",
        "お店の名前": "soleil",
        "お店のサービス": "エステ",
        "お得なサービス": "【毎回】入会すると、全メニュー20％OFF",
        "ホームページ": "https://www.instagram.com/soleil.wakae/"
    },
    {
        "ジャンル": "ビューティー",
        "お店の名前": "Luz　Beauty（ルース ビューティー）",
        "お店のサービス": "トータルビューティーサロン（エステ、ボディ、痩身、脱毛、ネイル）",
        "お得なサービス": "【毎回】5％OFF（痩身を除く）、【毎回】痩身100円引き",
        "ホームページ": "https://www.instagram.com/luzbeauty_r/"
    },
    {
        "ジャンル": "ヘルスケア",
        "お店の名前": "ボディケアハウスふくろう",
        "お店のサービス": "首、肩、腰専門の整体院",
        "お得なサービス": "【初回】500円引き 2,980円➡2,480円",
        "ホームページ": "https://bodycarehouse-fukuro.com/"
    },
    {
        "ジャンル": "ヘルスケア",
        "お店の名前": "接骨院　極",
        "お店のサービス": "首・肩・腰のつらさ、頭痛の改善、骨盤矯正",
        "お得なサービス": "【初回】部分治療1,000円引き、【初回】全身治療1,000円引き",
        "ホームページ": "https://kiwami-sekkotsuin.com/"
    },
    {
        "ジャンル": "ヘルスケア",
        "お店の名前": "エンガワのニワ",
        "お店のサービス": "整体・足つぼ",
        "お得なサービス": "全メニュー20%OFF 入会中何度でも利用可能（２週間に一回通える方は全メニュー半額）",
        "ホームページ": "https://engawanomori.com/"
    },
    {
        "ジャンル": "ヘルスケア",
        "お店の名前": "たいよう整骨院",
        "お店のサービス": "整骨院、産後、事故",
        "お得なサービス": "【初回】骨盤矯正、猫背矯正通常初回5,500円⇒3,300円、産後骨盤ケア 初回通常5,000円⇒3,980円",
        "ホームページ": "https://taiyo-seikotsu.net/"
    },
    {
        "ジャンル": "ヘルスケア",
        "お店の名前": "接骨院　縁",
        "お店のサービス": "首・肩・腰のつらさ、頭痛の改善、骨盤矯正",
        "お得なサービス": "【初回】部分治療1,000円引き、【初回】全身治療1,000円引き",
        "ホームページ": "https://enishi-sekkotsuin.com/"
    },
    {
        "ジャンル": "フィットネス",
        "お店の名前": "RECTANGLE（レクトアングル）",
        "お店のサービス": "トレーニング、エクササイズ",
        "お得なサービス": "【男女2人で参加】ビジター60分1,100円引き（ヒアリング、体組成測定、ウォームアップエクササイズ、低酸素トレーニング、クールダウン）",
        "ホームページ": "https://rectangle-fitness.com/"
    },
    {
        "ジャンル": "カフェ",
        "お店の名前": "an café 205（アンカフェ）",
        "お店のサービス": "カフェ",
        "お得なサービス": "【毎回】ケーキご注文の際、ドリンク無料",
        "ホームページ": "https://www.instagram.com/ancafe205/"
    },
    {
        "ジャンル": "カフェ",
        "お店の名前": "桜梅桃李",
        "お店のサービス": "夜カフェ風会員制談話室",
        "お得なサービス": "登録費用無料（登録費用：1,000円）",
        "ホームページ": "https://www.instagram.com/obtr_ibara/p/C84CLFkB9Tc/"
    },
    {
        "ジャンル": "カフェ",
        "お店の名前": "風の時計",
        "お店のサービス": "海の見えるカフェ、ドックラン",
        "お得なサービス": "【毎回】ミニソフトクリーム無料",
        "ホームページ": "https://www.kazenotokei.com/"
    },
    {
        "ジャンル": "カフェ",
        "お店の名前": "瀬織津珈琲",
        "お店のサービス": "カフェ",
        "お得なサービス": "【毎回】100円引き",
        "ホームページ": "https://www.instagram.com/seoritsu_coffee_fukuyama/"
    },
    {
        "ジャンル": "グルメ",
        "お店の名前": "尾道横丁",
        "お店のサービス": "居酒屋",
        "お得なサービス": "大粒牡蠣またはえびプレゼント",
        "ホームページ": "https://onomichi-hondoori.jp/details/topics-detail.php?di=2000"
    },
    {
        "ジャンル": "バー",
        "お店の名前": "BAR zoo",
        "お店のサービス": "BAR",
        "お得なサービス": "可愛いグラスで1杯サービス",
        "ホームページ": "https://www.instagram.com/barseezoo/"
    },
    {
        "ジャンル": "カフェ",
        "お店の名前": "プロテインカフェスタイル erbe（エルベ）",
        "お店のサービス": "プロテインカフェ",
        "お得なサービス": "【毎回】プレミアムシェイク100円引き",
        "ホームページ": "https://www.instagram.com/proteincafestyleerbe/profilecard/"
    },
    {
        "ジャンル": "カフェ",
        "お店の名前": "夜cafe SUN9（サンキュウ）",
        "お店のサービス": "カフェ",
        "お得なサービス": "【毎回？】メッセージプレート又はドリンク無料",
        "ホームページ": "https://sun9.owst.jp/"
    },
    {
        "ジャンル": "バー",
        "お店の名前": "カサブランカ",
        "お店のサービス": "バー、カフェ",
        "お得なサービス": "【毎回】1,000円引き（2人利用時）同一カップルは1回まで（2名以上で1人2,000円以上の場合1人500円引き）",
        "ホームページ": "https://www.instagram.com/cafe_bar_kasaburanka/"
    },
    {
        "ジャンル": "バー",
        "お店の名前": "N.",
        "お店のサービス": "BAR",
        "お得なサービス": "セット料金1000円引き",
        "ホームページ": null
    },
    {
        "ジャンル": "バー",
        "お店の名前": "明治館",
        "お店のサービス": "バー、カフェ",
        "お得なサービス": "【毎回】1,000円引き（2人利用時）同一カップル1回迄（2名以上で1人2,000円以上の場合1人500円引き）",
        "ホームページ": "https://fukuyamameijikan.wixsite.com/jiggerbar"
    },
    {
        "ジャンル": "グルメ",
        "お店の名前": "FUJIDO（宮通駅前）",
        "お店のサービス": "居酒屋",
        "お得なサービス": "単品ファーストドリンク無料、飲み放題¥1,000（通常¥1,980）、りんご飴サービス",
        "ホームページ": "https://fujiidou.owst.jp/"
    },
    {
        "ジャンル": "グルメ",
        "お店の名前": "韓国風居酒屋　ソッシンガ",
        "お店のサービス": "韓国風居酒屋",
        "お得なサービス": "【毎回】ドリンク1杯無料（最大700円）",
        "ホームページ": "https://www.fukuyama-gourmettap.com/gourmet/sossinga"
    },
    {
        "ジャンル": "ビューティー",
        "お店の名前": "ミツハノメノカミカオリ",
        "お店のサービス": "占いとエステ（潜在意識フーチ鑑定、霊視タロットなど）",
        "お得なサービス": null,
        "ホームページ": null
    },
    {
        "ジャンル": "買取",
        "お店の名前": "買取大吉　福山多治米店",
        "お店のサービス": "ブランド品買取",
        "お得なサービス": "【毎回？】買取金額最大5％上乗せ（1部対象外商品あり）",
        "ホームページ": "https://daikichi-fukuyama.jp/"
    },
    {
        "ジャンル": "教育",
        "お店の名前": "ポーセラーツ",
        "お店のサービス": "教育，学習支援業",
        "お得なサービス": "Retroグラスづくり体験お1人4500円➡お2人で5000円",
        "ホームページ": "https://ameblo.jp/papillon-ai/theme-10074009171.html"
    },
    {
        "ジャンル": "ビューティー",
        "お店の名前": "Mila effort",
        "お店のサービス": "まつげエクステ、まつげパーマ",
        "お得なサービス": "まつぱ5000円→4500円、マツエク6000円→5500円",
        "ホームページ": "https://www.instagram.com/yui619ishida/"
    },
    {
        "ジャンル": "ビューティー",
        "お店の名前": "white",
        "お店のサービス": "美容院",
        "お得なサービス": "美容院のサブスク・どのコースもサロン商品を30%OFFで購入可能",
        "ホームページ": "https://www.instagram.com/white_the_total_beauty/"
    },
    {
        "ジャンル": "サービス",
        "お店の名前": "スマートライフアシスト株式会社",
        "お店のサービス": "太陽光・オール電化・蓄電池を販売",
        "お得なサービス": "補助金申請期間限定値引き（要問合せ）",
        "ホームページ": "https://smartlifenavi.com/"
    },
    {
        "ジャンル": "ビューティー",
        "お店の名前": "Vega",
        "お店のサービス": "LED全身脱毛サロン",
        "お得なサービス": "【初回】全メニュー半額",
        "ホームページ": "https://salon-vega.jp/"
    },
    {
        "ジャンル": "教育",
        "お店の名前": "HANAUTA",
        "お店のサービス": "あんこフラワー教室",
        "お得なサービス": "あんこフラワー（紫陽花）体験5,000円",
        "ホームページ": "https://www.instagram.com/ankoflowerhanauta/"
    },
    {
        "ジャンル": "フォトスタジオ",
        "お店の名前": "studio riberta",
        "お店のサービス": "プロフィール撮影",
        "お得なサービス": "【初回】プロフィール写真 元々¥7,700➡1枚¥4,500 / 2枚¥8,000 / 3枚¥10,000（30分間）",
        "ホームページ": "https://www.instagram.com/refi.57/"
    },
    {
        "ジャンル": "サービス",
        "お店の名前": "株式会社　ダイシーサービス",
        "お店のサービス": "水道関係",
        "お得なサービス": "【初回】ご契約内容により選べる商品をプレゼント（相談・見積もり無料）",
        "ホームページ": "https://www.kensetumap.com/company/429582/"
    }
]


export default function Home() {

    return (
        <>
            <title>{"Match-Bond 福山"}</title>
            <meta name="description" content={"Match-Bond｜総額〇〇万円お得に婚活！｜初期費用０円｜福山結婚相談所"} />

            <div className="min-h-svh flex flex-col gap-4 p-8" id="service1">
                <h2 className="text-title2">婚活中にお得なサービスが受けれるお店</h2>
                <CsvTable data={data2} />
                <h2 className="text-title2" id="service2">成婚退会後にお得なサービスが受けれるお店</h2>

                <CsvTable data={data} />

                <p>※お得なサービスはMatch-Bondの結婚相談所に入会した場合のみご利用頂けます。</p>
            </div>
        </>
    );
}


const CsvTable = ({ data }: { data: any }) => {


    return (
        <div className="overflow-auto shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 rounded-xl shadow-md">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ジャンル
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            お店の名前
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            お店のサービス
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            お得なサービス
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ホームページ
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className="px-2 py-1 whitespace-nowrap text-sm text-gray-900">{row["ジャンル"]}</td>
                            <td className="px-2 py-1 whitespace-nowrap text-sm text-gray-900">{row["お店の名前"]}</td>
                            <td className="px-2 py-1 whitespace-nowrap text-sm text-gray-900">{row["お店のサービス"]}</td>
                            <td className="px-2 py-1 whitespace-nowrap text-sm text-gray-900">{row["お得なサービス"]}</td>
                            <td className="px-2 py-1 whitespace-nowrap text-sm text-blue-500">
                                {row["ホームページ"] ? (
                                    <a href={row["ホームページ"]} target="_blank" rel="noopener noreferrer">
                                        リンクを見る
                                    </a>
                                ) : (
                                    'なし'
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

