import {
  Image,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Center,
  VStack,
  Text,
  Divider,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

import pockeduck from '../../../images/PockeDuck.png';

export const ProfileHeader: FC = memo(() => {
  return (
    <>
      <HStack mx="auto" my={8} pb={8} borderBottom="1px">
        <Image
          boxSize={{ base: '130px', md: '150px' }}
          src={pockeduck}
          alt="プロフィール画像"
          mr={{ base: 4, md: 8 }}
        />
        <VStack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              value="齊藤  多世"
              isReadOnly
              fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '3xl' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="kana">Kana</FormLabel>
            <Input
              id="kana"
              value="Saito Tayo"
              isReadOnly
              fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
            />
          </FormControl>
        </VStack>
      </HStack>
      <Center>
        <VStack spacing={4} mx="auto">
          <FormControl>
            <FormLabel htmlFor="birth">Birth</FormLabel>
            <Input
              id="birth"
              value="1979年1月6日"
              isReadOnly
              fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '3xl' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="mail">Mail</FormLabel>
            <Input
              id="mail"
              value="tayo.rururu@gmail.com"
              isReadOnly
              fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="summary">Resume</FormLabel>
            <Text w={{ base: '300px', sm: '400px', md: '500px', lg: '600px' }}>
              1979年、山梨県生まれ。茨城大学理学部数理科学科卒業。
              <br />
              卒業後、ソフトウェア情報開発株式会社に2002年入社。大手2銀行が統合した直後のインターネットバンキングシステム開発に携わる。未経験新人として入ったこともあり、エンジニアとしてのスキルはあまりつかなかった。
              <br />
              2016年から現職の㈱EOSファームにパンチャーとしてパート入社、その後2018年に正社員になり、新規案件の運用方法策定や、作業方法を従業員へ展開していくことに携わる。障害者施設だったこともあり、A型従業員が作業しやすく、かつ納品精度を落とさないよう運用することを心掛ける。その一環として、従業員全員が最新の入力仕様を共有できるよう、社内Wiki（Dokuwiki）を導入。また、ルーチンワークの自動化を積極的に推進、自動化ツールの開発。
              この頃からエンジニア職に興味を持ち、社内入力システムの運用、保守を担当。
              <br />
              BtoEの充実を目指し、A型従業員専用の社内勤怠管理アプリ作成を提案し、開発に携わる（技術スタック:Node.js、JavaScript、HTML、CSS、MySQL）
              <br />
              また、2019年度からPMS教育担当者として社員、従業員にPMS研修を実施。
            </Text>
          </FormControl>
          <Divider />
          <FormControl>
            <FormLabel htmlFor="history">History</FormLabel>
            <FormLabel htmlFor="historyYear">2002年4月～2003年3月</FormLabel>
            <Input id="historyYear" value="ソフトウェア情報開発株式会社" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="historyYear">2011年9月～20016年3月</FormLabel>
            <Input id="historyYear" value="開発株式会社村瀬製作所" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="historyYear">2016年7月～</FormLabel>
            <Input id="historyYear" value="株式会社EOSファーム" />
          </FormControl>
          <Divider />
          <FormControl>
            <FormLabel htmlFor="history">PR</FormLabel>
            <Text w={{ base: '300px', sm: '400px', md: '500px', lg: '600px' }}>
              1979年、山梨県生まれ。茨城大学理学部数理科学科卒業。
              <br />
              卒業後、ソフトウェア情報開発株式会社に2002年入社。大手2銀行が統合した直後のインターネットバンキングシステム開発に携わる。未経験新人として入ったこともあり、エンジニアとしてのスキルはあまりつかなかった。
              <br />
              2016年から現職の㈱EOSファームにパンチャーとしてパート入社、その後2018年に正社員になり、新規案件の運用方法策定や、作業方法を従業員へ展開していくことに携わる。障害者施設だったこともあり、A型従業員が作業しやすく、かつ納品精度を落とさないよう運用することを心掛ける。その一環として、従業員全員が最新の入力仕様を共有できるよう、社内Wiki（Dokuwiki）を導入。また、ルーチンワークの自動化を積極的に推進、自動化ツールの開発。
              この頃からエンジニア職に興味を持ち、社内入力システムの運用、保守を担当。
              <br />
              BtoEの充実を目指し、A型従業員専用の社内勤怠管理アプリ作成を提案し、開発に携わる（技術スタック:Node.js、JavaScript、HTML、CSS、MySQL）
              <br />
              また、2019年度からPMS教育担当者として社員、従業員にPMS研修を実施。
            </Text>
          </FormControl>
        </VStack>
      </Center>
    </>
  );
});
