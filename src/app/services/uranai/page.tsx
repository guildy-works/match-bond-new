'use client'

import React from 'react';
import { HighlightMarker } from '@/components/HighlightMarker';

const BlogPost = () => {
    return (
        <div className="bg-color2 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white">
                <header className="bg-color3 text-white text-center py-6">
                    <h1 className="text-4xl font-bold">婚活って楽しい</h1>
                </header>

                <div className="px-6 py-4">
                    <div className="text-sm text-gray-600 mb-4">
                        by <span className="font-semibold">yumekanae</span> in <span className="font-semibold">イベント</span> on 投稿日: <span className="font-semibold">2023年10月23日</span>
                    </div>

                    <h2 className="text-2xl font-bold text-color3 mb-4">Match-Bondが主催する女性がホッ♡とする合コンって？</h2>

                    <p className="mb-4">Match-Bondでは、参加者同士の年齢が近い合コンをセッティングしています。</p>
                    <p className="mb-4">初めて会う人ばかりで緊張しますよね。でも安心してください。司会進行もあり、席替え、簡単なゲームなど、場を和やかにできるようにイベントも計画しています。</p>

                    <div className="bg-color4 border-l-4 border-color3 p-4 mb-6">
                        <p className="font-semibold">当社が開催する合コンは、「女性がホッっとできる環境」を意識しています。</p>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg mb-6">
                        <h3 className="text-xl font-bold text-color3 mb-3">女性がホッとするポイントは３つあります。</h3>
                        <ol className="list-decimal list-inside">
                            <li>ニックネーム参加（知らない人に本名を知られるのが怖い人のために）</li>
                            <li>連絡先の交換NG（連絡先を聞かれたら断れない人のために）</li>
                            <li>女性が先に退出、5分後に男性退出です。（合コン後の誘いが怖い人のために）</li>
                        </ol>
                    </div>

                    <h3 className="text-xl font-bold mb-3">女性はホッとするかもしれないけど、連絡先を交換って絶対にできないの？</h3>
                    <HighlightMarker >もちろん絶対ではありません。</HighlightMarker>

                    <p className="mb-4">合コンの終盤には【コンタクトカード】をお渡しします。自分の番号と、気になるお相手の番号を記入して提出してもらいます。</p>
                    <p className="mb-4">気になるお相手には当社から連絡し、連絡先交換のOKが出ましたら相互交換となります。</p>
                    <p className="mb-4">男女共に異性からの連絡先交換を直接断ることがないため、安心して会を楽しむことができます☺</p>
                    <p>このシステムは男女ともに大変好評でした。お客様の声に実際の感想を載せていますのでご覧ください。</p>
                </div>

                <div className="bg-color3 text-white text-center py-6 mt-6">
                    <p className="text-xl font-bold">興味をお持ちの方は、ぜひMatch-Bondの合コンにご参加ください！</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
