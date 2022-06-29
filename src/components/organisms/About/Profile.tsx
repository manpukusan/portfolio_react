import { FC, memo } from 'react';
import {
  FormControl,
  FormLabel,
  Center,
  VStack,
  Text,
  Divider,
} from '@chakra-ui/react';

export const Profile: FC = memo(() => {
  return (
    <Center>
      <VStack spacing={4} mx="auto">
        <FormControl>
          <FormLabel htmlFor="summary">Resume</FormLabel>
          <Text w={{ base: '300px', sm: '400px', md: '500px', lg: '600px' }}>
            1979年、山梨県生まれ。茨城大学理学部数理科学科卒業。
            <br />
            卒業後、ソフトウェア開発会社に2002年入社。大手2銀行が統合した直後のインターネットバンキングシステム開発に携わる。未経験新人として入ったこともあり、エンジニアとしてのスキルはあまりつかなかった。
            <br />
            2016年から現職の福祉施設にデータ入力のパンチャーとしてパート入社、その後2018年に正社員になり、新規案件の運用方法策定や、作業方法を従業員へ展開していくことに携わる。障害者施設だったこともあり、A型従業員が作業しやすく、かつ納品精度を落とさないよう運用することを心掛ける（A型従業員とは、雇用関係を結んだ障害者のことです）その一環として、従業員全員が最新の入力仕様を共有できるよう、社内Wiki（Dokuwiki）を導入。また、ルーチンワークの自動化を積極的に推進、自動化ツールの開発。
            この頃からエンジニア職に興味を持ち、社内入力システムの運用、保守を担当。
            <br />
            BtoEの充実を目指し、A型従業員専用の社内勤怠管理アプリ作成を提案し、開発に携わる（技術スタック:Node.js、JavaScript、HTML、CSS、MySQL）
            <br />
            また、2019年度からPMS教育担当者として社員、従業員にPMS研修を実施。
          </Text>
        </FormControl>
        <Divider />
        <FormControl>
          <FormLabel htmlFor="history">PR</FormLabel>
          <Text w={{ base: '300px', sm: '400px', md: '500px', lg: '600px' }}>
            問題解決のための原因を考え、積極的にアイデアを提案、実行に移すことが得意です。
            一緒に働くチームメンバーに、業務上の不満や不便なことを積極的にヒヤリングし、
            その課題を解決することでチームメンバーのモチベーションや作業効率を上げること、結果、
            クライアントにより良い品質の提出物を納品することで、会社の信頼度も向上させることができました。
            既に請け負っているクライアントからは、業務拡大として新規案件の受注もできましたし、また信頼度が上がったことで、
            クライアントが新規案件を獲得する際には、業務運用上のアドバイスをすることもできました。
            現職が障害者施設ということもあり、多種多様な障害を抱えたメンバーの、得意不得意を見極め、
            その方に合った作業アサインをすることで、業務の効率性、保守性、品質を向上させる能力がつきました。
            また、潤沢な資金がある会社ではなかったために、いかにお金をかけずに進捗管理や、業務仕様の社内共有をするか考え、
            無料で使えるDokuwikiを社内の共有掲示板として導入したり、
            障害者施設としてありがちな従業員の不安定な勤怠を、リアルタイムに職員が共有すべく、A型従業員専用の社内勤怠アプリをNode.jsで構築、運用しております。
            上記、掲示板と勤怠アプリのおかげで、最新の作業予定を社内全員で共有することができ、A型従業員の士気を高め、ただのパンチャーではなく大事な案件の1メンバーとしての自覚を持ってもらえました。結果、A型従業員の勤怠率を向上させ、業務を安定運用し、会社を赤字から黒字化へ貢献できた自負があります。
          </Text>
        </FormControl>
      </VStack>
    </Center>
  );
});
