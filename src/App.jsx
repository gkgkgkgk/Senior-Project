import {React, useState} from 'react';
import Box from './components/renderer/Box';
import Display from './components/renderer/Display';
import "./App.css"
import Paper from './components/text/Paper'
import Header from './components/text/Header'

const App = () => {
  const [myMap, setMyMap] = useState([
    {
      "normalized_weight": 0.2044117692575928,
      "raw_weight": 0.16148529771349837,
      "x": -16,
      "y": -16
    },
    {
      "normalized_weight": 0.20810472508766548,
      "raw_weight": 0.16440273281925577,
      "x": -16,
      "y": -15
    },
    {
      "normalized_weight": 0.19446098903413922,
      "raw_weight": 0.15362418133697003,
      "x": -16,
      "y": -14
    },
    {
      "normalized_weight": 0.19189651089424425,
      "raw_weight": 0.15159824360645302,
      "x": -16,
      "y": -13
    },
    {
      "normalized_weight": 0.16129477111170715,
      "raw_weight": 0.1274228691782487,
      "x": -16,
      "y": -12
    },
    {
      "normalized_weight": 0.1436363812397197,
      "raw_weight": 0.1134727411793786,
      "x": -16,
      "y": -11
    },
    {
      "normalized_weight": 0.15606120296637743,
      "raw_weight": 0.12328835034343821,
      "x": -16,
      "y": -10
    },
    {
      "normalized_weight": 0.1881676060360418,
      "raw_weight": 0.14865240876847308,
      "x": -16,
      "y": -9
    },
    {
      "normalized_weight": 0.2311154902326925,
      "raw_weight": 0.18258123728382714,
      "x": -16,
      "y": -8
    },
    {
      "normalized_weight": 0.27110894045366235,
      "raw_weight": 0.21417606295839334,
      "x": -16,
      "y": -7
    },
    {
      "normalized_weight": 0.31453557416612693,
      "raw_weight": 0.24848310359124037,
      "x": -16,
      "y": -6
    },
    {
      "normalized_weight": 0.3490705003329807,
      "raw_weight": 0.27576569526305483,
      "x": -16,
      "y": -5
    },
    {
      "normalized_weight": 0.39240506329113906,
      "raw_weight": 0.30999999999999994,
      "x": -16,
      "y": -4
    },
    {
      "normalized_weight": 0.4936708860759492,
      "raw_weight": 0.39,
      "x": -16,
      "y": -3
    },
    {
      "normalized_weight": 0.5949367088607594,
      "raw_weight": 0.4700000000000001,
      "x": -16,
      "y": -2
    },
    {
      "normalized_weight": 0.6962025316455696,
      "raw_weight": 0.5500000000000002,
      "x": -16,
      "y": -1
    },
    {
      "normalized_weight": 0.6455696202531644,
      "raw_weight": 0.5100000000000001,
      "x": -16,
      "y": 0
    },
    {
      "normalized_weight": 0.5949367088607594,
      "raw_weight": 0.4700000000000001,
      "x": -16,
      "y": 1
    },
    {
      "normalized_weight": 0.5443037974683543,
      "raw_weight": 0.43000000000000005,
      "x": -16,
      "y": 2
    },
    {
      "normalized_weight": 0.4936708860759492,
      "raw_weight": 0.39,
      "x": -16,
      "y": 3
    },
    {
      "normalized_weight": 0.4918038922097523,
      "raw_weight": 0.3885250748457044,
      "x": -16,
      "y": 4
    },
    {
      "normalized_weight": 0.5026816896454657,
      "raw_weight": 0.397118534819918,
      "x": -16,
      "y": 5
    },
    {
      "normalized_weight": 0.5416139331387589,
      "raw_weight": 0.42787500717961974,
      "x": -16,
      "y": 6
    },
    {
      "normalized_weight": 0.5788002630814887,
      "raw_weight": 0.4572522078343762,
      "x": -16,
      "y": 7
    },
    {
      "normalized_weight": 0.5951105054360608,
      "raw_weight": 0.47013729929448816,
      "x": -16,
      "y": 8
    },
    {
      "normalized_weight": 0.6017474868223911,
      "raw_weight": 0.47538051458968916,
      "x": -16,
      "y": 9
    },
    {
      "normalized_weight": 0.5874505066888023,
      "raw_weight": 0.4640859002841539,
      "x": -16,
      "y": 10
    },
    {
      "normalized_weight": 0.5807522656336961,
      "raw_weight": 0.4587942898506201,
      "x": -16,
      "y": 11
    },
    {
      "normalized_weight": 0.5660864622514148,
      "raw_weight": 0.4472083051786178,
      "x": -16,
      "y": 12
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -16,
      "y": 13
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -16,
      "y": 14
    },
    {
      "normalized_weight": 0.5642504374755191,
      "raw_weight": 0.4457578456056602,
      "x": -16,
      "y": 15
    },
    {
      "normalized_weight": 0.1825504637874753,
      "raw_weight": 0.14421486639210554,
      "x": -15,
      "y": -16
    },
    {
      "normalized_weight": 0.16283083599670806,
      "raw_weight": 0.1286363604373994,
      "x": -15,
      "y": -15
    },
    {
      "normalized_weight": 0.17640849375153259,
      "raw_weight": 0.1393627100637108,
      "x": -15,
      "y": -14
    },
    {
      "normalized_weight": 0.18997159018584134,
      "raw_weight": 0.1500775562468147,
      "x": -15,
      "y": -13
    },
    {
      "normalized_weight": 0.17839382850751329,
      "raw_weight": 0.14093112452093554,
      "x": -15,
      "y": -12
    },
    {
      "normalized_weight": 0.15587897177419302,
      "raw_weight": 0.12314438770161253,
      "x": -15,
      "y": -11
    },
    {
      "normalized_weight": 0.14006351107333742,
      "raw_weight": 0.1106501737479366,
      "x": -15,
      "y": -10
    },
    {
      "normalized_weight": 0.1405296606402953,
      "raw_weight": 0.11101843190583331,
      "x": -15,
      "y": -9
    },
    {
      "normalized_weight": 0.16709714778248316,
      "raw_weight": 0.13200674674816174,
      "x": -15,
      "y": -8
    },
    {
      "normalized_weight": 0.23865875104166717,
      "raw_weight": 0.18854041332291713,
      "x": -15,
      "y": -7
    },
    {
      "normalized_weight": 0.29019351438830815,
      "raw_weight": 0.22925287636676353,
      "x": -15,
      "y": -6
    },
    {
      "normalized_weight": 0.3357753976820296,
      "raw_weight": 0.26526256416880345,
      "x": -15,
      "y": -5
    },
    {
      "normalized_weight": 0.3797468354430378,
      "raw_weight": 0.29999999999999993,
      "x": -15,
      "y": -4
    },
    {
      "normalized_weight": 0.48101265822784794,
      "raw_weight": 0.38,
      "x": -15,
      "y": -3
    },
    {
      "normalized_weight": 0.5822784810126581,
      "raw_weight": 0.4600000000000001,
      "x": -15,
      "y": -2
    },
    {
      "normalized_weight": 0.6835443037974683,
      "raw_weight": 0.5400000000000001,
      "x": -15,
      "y": -1
    },
    {
      "normalized_weight": 0.6518987341772151,
      "raw_weight": 0.5150000000000001,
      "x": -15,
      "y": 0
    },
    {
      "normalized_weight": 0.60126582278481,
      "raw_weight": 0.4750000000000001,
      "x": -15,
      "y": 1
    },
    {
      "normalized_weight": 0.550632911392405,
      "raw_weight": 0.43500000000000005,
      "x": -15,
      "y": 2
    },
    {
      "normalized_weight": 0.49999999999999983,
      "raw_weight": 0.395,
      "x": -15,
      "y": 3
    },
    {
      "normalized_weight": 0.496395883451024,
      "raw_weight": 0.39215274792630905,
      "x": -15,
      "y": 4
    },
    {
      "normalized_weight": 0.4805846516644038,
      "raw_weight": 0.3796618748148791,
      "x": -15,
      "y": 5
    },
    {
      "normalized_weight": 0.5191038012433714,
      "raw_weight": 0.41009200298226356,
      "x": -15,
      "y": 6
    },
    {
      "normalized_weight": 0.5675156354649266,
      "raw_weight": 0.44833735201729213,
      "x": -15,
      "y": 7
    },
    {
      "normalized_weight": 0.5964643919500934,
      "raw_weight": 0.4712068696405739,
      "x": -15,
      "y": 8
    },
    {
      "normalized_weight": 0.617049676148469,
      "raw_weight": 0.4874692441572906,
      "x": -15,
      "y": 9
    },
    {
      "normalized_weight": 0.5943341051236503,
      "raw_weight": 0.46952394304768386,
      "x": -15,
      "y": 10
    },
    {
      "normalized_weight": 0.591411432649816,
      "raw_weight": 0.4672150317933548,
      "x": -15,
      "y": 11
    },
    {
      "normalized_weight": 0.5941039504157999,
      "raw_weight": 0.4693421208284821,
      "x": -15,
      "y": 12
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -15,
      "y": 13
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -15,
      "y": 14
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -15,
      "y": 15
    },
    {
      "normalized_weight": 0.16922160037528974,
      "raw_weight": 0.13368506429647894,
      "x": -14,
      "y": -16
    },
    {
      "normalized_weight": 0.13236917679346608,
      "raw_weight": 0.10457164966683824,
      "x": -14,
      "y": -15
    },
    {
      "normalized_weight": 0.15657769251627032,
      "raw_weight": 0.1236963770878536,
      "x": -14,
      "y": -14
    },
    {
      "normalized_weight": 0.1785665950831425,
      "raw_weight": 0.1410676101156826,
      "x": -14,
      "y": -13
    },
    {
      "normalized_weight": 0.17336893054605249,
      "raw_weight": 0.1369614551313815,
      "x": -14,
      "y": -12
    },
    {
      "normalized_weight": 0.1519769979020378,
      "raw_weight": 0.12006182834260991,
      "x": -14,
      "y": -11
    },
    {
      "normalized_weight": 0.12588409659253857,
      "raw_weight": 0.0994484363081055,
      "x": -14,
      "y": -10
    },
    {
      "normalized_weight": 0.11666365234255127,
      "raw_weight": 0.09216428535061554,
      "x": -14,
      "y": -9
    },
    {
      "normalized_weight": 0.13730924050267462,
      "raw_weight": 0.10847429999711299,
      "x": -14,
      "y": -8
    },
    {
      "normalized_weight": 0.17399017071011152,
      "raw_weight": 0.13745223486098815,
      "x": -14,
      "y": -7
    },
    {
      "normalized_weight": 0.22687392844235169,
      "raw_weight": 0.1792304034694579,
      "x": -14,
      "y": -6
    },
    {
      "normalized_weight": 0.2927858255333563,
      "raw_weight": 0.23130080217135157,
      "x": -14,
      "y": -5
    },
    {
      "normalized_weight": 0.3670886075949365,
      "raw_weight": 0.2899999999999999,
      "x": -14,
      "y": -4
    },
    {
      "normalized_weight": 0.46835443037974667,
      "raw_weight": 0.37,
      "x": -14,
      "y": -3
    },
    {
      "normalized_weight": 0.5696202531645569,
      "raw_weight": 0.45000000000000007,
      "x": -14,
      "y": -2
    },
    {
      "normalized_weight": 0.670886075949367,
      "raw_weight": 0.5300000000000001,
      "x": -14,
      "y": -1
    },
    {
      "normalized_weight": 0.6582278481012658,
      "raw_weight": 0.5200000000000001,
      "x": -14,
      "y": 0
    },
    {
      "normalized_weight": 0.6075949367088607,
      "raw_weight": 0.4800000000000001,
      "x": -14,
      "y": 1
    },
    {
      "normalized_weight": 0.5569620253164556,
      "raw_weight": 0.44000000000000006,
      "x": -14,
      "y": 2
    },
    {
      "normalized_weight": 0.5063291139240504,
      "raw_weight": 0.4,
      "x": -14,
      "y": 3
    },
    {
      "normalized_weight": 0.520663701603964,
      "raw_weight": 0.4113243242671317,
      "x": -14,
      "y": 4
    },
    {
      "normalized_weight": 0.49245630690157316,
      "raw_weight": 0.38904048245224293,
      "x": -14,
      "y": 5
    },
    {
      "normalized_weight": 0.5001506945156798,
      "raw_weight": 0.39511904866738723,
      "x": -14,
      "y": 6
    },
    {
      "normalized_weight": 0.5441153281452227,
      "raw_weight": 0.429851109234726,
      "x": -14,
      "y": 7
    },
    {
      "normalized_weight": 0.5671778899646038,
      "raw_weight": 0.44807053307203715,
      "x": -14,
      "y": 8
    },
    {
      "normalized_weight": 0.592640969690346,
      "raw_weight": 0.46818636605537345,
      "x": -14,
      "y": 9
    },
    {
      "normalized_weight": 0.591598970444139,
      "raw_weight": 0.46736318665086996,
      "x": -14,
      "y": 10
    },
    {
      "normalized_weight": 0.5754197682561399,
      "raw_weight": 0.45458161692235066,
      "x": -14,
      "y": 11
    },
    {
      "normalized_weight": 0.6011354711915546,
      "raw_weight": 0.47489702224132835,
      "x": -14,
      "y": 12
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -14,
      "y": 13
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -14,
      "y": 14
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -14,
      "y": 15
    },
    {
      "normalized_weight": 0.1404315626833945,
      "raw_weight": 0.11094093451988168,
      "x": -13,
      "y": -16
    },
    {
      "normalized_weight": 0.14435884069167004,
      "raw_weight": 0.11404348414641936,
      "x": -13,
      "y": -15
    },
    {
      "normalized_weight": 0.13940703280829206,
      "raw_weight": 0.11013155591855077,
      "x": -13,
      "y": -14
    },
    {
      "normalized_weight": 0.16822078849376867,
      "raw_weight": 0.1328944229100773,
      "x": -13,
      "y": -13
    },
    {
      "normalized_weight": 0.16607957822949157,
      "raw_weight": 0.1312028668012984,
      "x": -13,
      "y": -12
    },
    {
      "normalized_weight": 0.13275650195631394,
      "raw_weight": 0.10487763654548804,
      "x": -13,
      "y": -11
    },
    {
      "normalized_weight": 0.1265401200795313,
      "raw_weight": 0.09996669486282976,
      "x": -13,
      "y": -10
    },
    {
      "normalized_weight": 0.117614544715791,
      "raw_weight": 0.09291549032547491,
      "x": -13,
      "y": -9
    },
    {
      "normalized_weight": 0.12113614398718127,
      "raw_weight": 0.09569755374987324,
      "x": -13,
      "y": -8
    },
    {
      "normalized_weight": 0.14387997626687482,
      "raw_weight": 0.11366518125083114,
      "x": -13,
      "y": -7
    },
    {
      "normalized_weight": 0.20653101413968564,
      "raw_weight": 0.16315950117035172,
      "x": -13,
      "y": -6
    },
    {
      "normalized_weight": 0.25214099613428054,
      "raw_weight": 0.1991913869460817,
      "x": -13,
      "y": -5
    },
    {
      "normalized_weight": 0.3544303797468352,
      "raw_weight": 0.2799999999999999,
      "x": -13,
      "y": -4
    },
    {
      "normalized_weight": 0.4556962025316454,
      "raw_weight": 0.36,
      "x": -13,
      "y": -3
    },
    {
      "normalized_weight": 0.5569620253164556,
      "raw_weight": 0.44000000000000006,
      "x": -13,
      "y": -2
    },
    {
      "normalized_weight": 0.6582278481012658,
      "raw_weight": 0.5200000000000001,
      "x": -13,
      "y": -1
    },
    {
      "normalized_weight": 0.6645569620253164,
      "raw_weight": 0.5250000000000001,
      "x": -13,
      "y": 0
    },
    {
      "normalized_weight": 0.6139240506329113,
      "raw_weight": 0.4850000000000001,
      "x": -13,
      "y": 1
    },
    {
      "normalized_weight": 0.5632911392405062,
      "raw_weight": 0.44500000000000006,
      "x": -13,
      "y": 2
    },
    {
      "normalized_weight": 0.5126582278481011,
      "raw_weight": 0.405,
      "x": -13,
      "y": 3
    },
    {
      "normalized_weight": 0.5263877009526047,
      "raw_weight": 0.41584628375255783,
      "x": -13,
      "y": 4
    },
    {
      "normalized_weight": 0.5043885210868985,
      "raw_weight": 0.39846693165864994,
      "x": -13,
      "y": 5
    },
    {
      "normalized_weight": 0.5061353168986017,
      "raw_weight": 0.3998469003498955,
      "x": -13,
      "y": 6
    },
    {
      "normalized_weight": 0.5436359592626241,
      "raw_weight": 0.42947240781747315,
      "x": -13,
      "y": 7
    },
    {
      "normalized_weight": 0.5494823409236282,
      "raw_weight": 0.4340910493296664,
      "x": -13,
      "y": 8
    },
    {
      "normalized_weight": 0.5949367088607592,
      "raw_weight": 0.47,
      "x": -13,
      "y": 9
    },
    {
      "normalized_weight": 0.5935209057443375,
      "raw_weight": 0.46888151553802676,
      "x": -13,
      "y": 10
    },
    {
      "normalized_weight": 0.5744035934878262,
      "raw_weight": 0.4537788388553829,
      "x": -13,
      "y": 11
    },
    {
      "normalized_weight": 0.5760399198040833,
      "raw_weight": 0.455071536645226,
      "x": -13,
      "y": 12
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -13,
      "y": 13
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -13,
      "y": 14
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -13,
      "y": 15
    },
    {
      "normalized_weight": 0.13077088123253347,
      "raw_weight": 0.10330899617370148,
      "x": -12,
      "y": -16
    },
    {
      "normalized_weight": 0.1180356422914126,
      "raw_weight": 0.09324815741021598,
      "x": -12,
      "y": -15
    },
    {
      "normalized_weight": 0.10670883838421504,
      "raw_weight": 0.0842999823235299,
      "x": -12,
      "y": -14
    },
    {
      "normalized_weight": 0.11984247016920123,
      "raw_weight": 0.094675551433669,
      "x": -12,
      "y": -13
    },
    {
      "normalized_weight": 0.1345147809654484,
      "raw_weight": 0.10626667696270425,
      "x": -12,
      "y": -12
    },
    {
      "normalized_weight": 0.13099057277021195,
      "raw_weight": 0.10348255248846748,
      "x": -12,
      "y": -11
    },
    {
      "normalized_weight": 0.1403968034983716,
      "raw_weight": 0.1109134747637136,
      "x": -12,
      "y": -10
    },
    {
      "normalized_weight": 0.1492689375882793,
      "raw_weight": 0.11792246069474069,
      "x": -12,
      "y": -9
    },
    {
      "normalized_weight": 0.14688546337129887,
      "raw_weight": 0.11603951606332616,
      "x": -12,
      "y": -8
    },
    {
      "normalized_weight": 0.15301185900408845,
      "raw_weight": 0.12087936861322991,
      "x": -12,
      "y": -7
    },
    {
      "normalized_weight": 0.1937623637151036,
      "raw_weight": 0.1530722673349319,
      "x": -12,
      "y": -6
    },
    {
      "normalized_weight": 0.226264867020349,
      "raw_weight": 0.17874924494607577,
      "x": -12,
      "y": -5
    },
    {
      "normalized_weight": 0.34177215189873394,
      "raw_weight": 0.2699999999999999,
      "x": -12,
      "y": -4
    },
    {
      "normalized_weight": 0.4430379746835441,
      "raw_weight": 0.35,
      "x": -12,
      "y": -3
    },
    {
      "normalized_weight": 0.5443037974683543,
      "raw_weight": 0.43000000000000005,
      "x": -12,
      "y": -2
    },
    {
      "normalized_weight": 0.6455696202531644,
      "raw_weight": 0.5100000000000001,
      "x": -12,
      "y": -1
    },
    {
      "normalized_weight": 0.670886075949367,
      "raw_weight": 0.5300000000000001,
      "x": -12,
      "y": 0
    },
    {
      "normalized_weight": 0.620253164556962,
      "raw_weight": 0.4900000000000001,
      "x": -12,
      "y": 1
    },
    {
      "normalized_weight": 0.5696202531645569,
      "raw_weight": 0.45000000000000007,
      "x": -12,
      "y": 2
    },
    {
      "normalized_weight": 0.5189873417721518,
      "raw_weight": 0.41000000000000003,
      "x": -12,
      "y": 3
    },
    {
      "normalized_weight": 0.5050543374392329,
      "raw_weight": 0.3989929265769941,
      "x": -12,
      "y": 4
    },
    {
      "normalized_weight": 0.5003195243449918,
      "raw_weight": 0.3952524242325437,
      "x": -12,
      "y": 5
    },
    {
      "normalized_weight": 0.5079854618981949,
      "raw_weight": 0.4013085148995741,
      "x": -12,
      "y": 6
    },
    {
      "normalized_weight": 0.5275552743854455,
      "raw_weight": 0.4167686667645021,
      "x": -12,
      "y": 7
    },
    {
      "normalized_weight": 0.6455696202531643,
      "raw_weight": 0.51,
      "x": -12,
      "y": 8
    },
    {
      "normalized_weight": 0.5949367088607592,
      "raw_weight": 0.47,
      "x": -12,
      "y": 9
    },
    {
      "normalized_weight": 0.5949367088607592,
      "raw_weight": 0.47,
      "x": -12,
      "y": 10
    },
    {
      "normalized_weight": 0.5737952155404658,
      "raw_weight": 0.4532982202769681,
      "x": -12,
      "y": 11
    },
    {
      "normalized_weight": 0.5562112049057772,
      "raw_weight": 0.43940685187556416,
      "x": -12,
      "y": 12
    },
    {
      "normalized_weight": 0.543140726362068,
      "raw_weight": 0.42908117382603383,
      "x": -12,
      "y": 13
    },
    {
      "normalized_weight": 0.5519095603609969,
      "raw_weight": 0.4360085526851877,
      "x": -12,
      "y": 14
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -12,
      "y": 15
    },
    {
      "normalized_weight": 0.10947144000743915,
      "raw_weight": 0.08648243760587696,
      "x": -11,
      "y": -16
    },
    {
      "normalized_weight": 0.11183592757634381,
      "raw_weight": 0.08835038278531164,
      "x": -11,
      "y": -15
    },
    {
      "normalized_weight": 0.11358202233259393,
      "raw_weight": 0.08972979764274923,
      "x": -11,
      "y": -14
    },
    {
      "normalized_weight": 0.12418768547278107,
      "raw_weight": 0.09810827152349708,
      "x": -11,
      "y": -13
    },
    {
      "normalized_weight": 0.1363569760200735,
      "raw_weight": 0.10772201105585809,
      "x": -11,
      "y": -12
    },
    {
      "normalized_weight": 0.1566654920687787,
      "raw_weight": 0.12376573873433522,
      "x": -11,
      "y": -11
    },
    {
      "normalized_weight": 0.1521727463697471,
      "raw_weight": 0.12021646963210024,
      "x": -11,
      "y": -10
    },
    {
      "normalized_weight": 0.14288847001914742,
      "raw_weight": 0.11288189131512649,
      "x": -11,
      "y": -9
    },
    {
      "normalized_weight": 0.1578068527399363,
      "raw_weight": 0.12466741366454973,
      "x": -11,
      "y": -8
    },
    {
      "normalized_weight": 0.15801332671732396,
      "raw_weight": 0.12483052810668598,
      "x": -11,
      "y": -7
    },
    {
      "normalized_weight": 0.17469514336637662,
      "raw_weight": 0.13800916325943757,
      "x": -11,
      "y": -6
    },
    {
      "normalized_weight": 0.21288260448118096,
      "raw_weight": 0.16817725754013302,
      "x": -11,
      "y": -5
    },
    {
      "normalized_weight": 0.32911392405063267,
      "raw_weight": 0.2599999999999999,
      "x": -11,
      "y": -4
    },
    {
      "normalized_weight": 0.43037974683544283,
      "raw_weight": 0.33999999999999997,
      "x": -11,
      "y": -3
    },
    {
      "normalized_weight": 0.531645569620253,
      "raw_weight": 0.42000000000000004,
      "x": -11,
      "y": -2
    },
    {
      "normalized_weight": 0.6329113924050632,
      "raw_weight": 0.5000000000000001,
      "x": -11,
      "y": -1
    },
    {
      "normalized_weight": 0.6772151898734177,
      "raw_weight": 0.5350000000000001,
      "x": -11,
      "y": 0
    },
    {
      "normalized_weight": 0.6265822784810126,
      "raw_weight": 0.4950000000000001,
      "x": -11,
      "y": 1
    },
    {
      "normalized_weight": 0.5759493670886074,
      "raw_weight": 0.45500000000000007,
      "x": -11,
      "y": 2
    },
    {
      "normalized_weight": 0.5253164556962024,
      "raw_weight": 0.41500000000000004,
      "x": -11,
      "y": 3
    },
    {
      "normalized_weight": 0.5179930993645411,
      "raw_weight": 0.4092145484979876,
      "x": -11,
      "y": 4
    },
    {
      "normalized_weight": 0.5161897882783708,
      "raw_weight": 0.40778993273991304,
      "x": -11,
      "y": 5
    },
    {
      "normalized_weight": 0.506575767607234,
      "raw_weight": 0.400194856409715,
      "x": -11,
      "y": 6
    },
    {
      "normalized_weight": 0.6962025316455694,
      "raw_weight": 0.55,
      "x": -11,
      "y": 7
    },
    {
      "normalized_weight": 0.6455696202531643,
      "raw_weight": 0.51,
      "x": -11,
      "y": 8
    },
    {
      "normalized_weight": 0.6455696202531643,
      "raw_weight": 0.51,
      "x": -11,
      "y": 9
    },
    {
      "normalized_weight": 0.5949367088607592,
      "raw_weight": 0.47,
      "x": -11,
      "y": 10
    },
    {
      "normalized_weight": 0.5949367088607592,
      "raw_weight": 0.47,
      "x": -11,
      "y": 11
    },
    {
      "normalized_weight": 0.5949367088607592,
      "raw_weight": 0.47,
      "x": -11,
      "y": 12
    },
    {
      "normalized_weight": 0.5278699211321074,
      "raw_weight": 0.41701723769436494,
      "x": -11,
      "y": 13
    },
    {
      "normalized_weight": 0.5584253551244452,
      "raw_weight": 0.44115603054831193,
      "x": -11,
      "y": 14
    },
    {
      "normalized_weight": 0.5632911392405061,
      "raw_weight": 0.445,
      "x": -11,
      "y": 15
    },
    {
      "normalized_weight": 0.09855183731615447,
      "raw_weight": 0.07785595147976206,
      "x": -10,
      "y": -16
    },
    {
      "normalized_weight": 0.10068745792083858,
      "raw_weight": 0.0795430917574625,
      "x": -10,
      "y": -15
    },
    {
      "normalized_weight": 0.10937090634671315,
      "raw_weight": 0.08640301601390342,
      "x": -10,
      "y": -14
    },
    {
      "normalized_weight": 0.12812085310879315,
      "raw_weight": 0.10121547395594661,
      "x": -10,
      "y": -13
    },
    {
      "normalized_weight": 0.15314504325892944,
      "raw_weight": 0.12098458417455431,
      "x": -10,
      "y": -12
    },
    {
      "normalized_weight": 0.16159525236244765,
      "raw_weight": 0.1276602493663337,
      "x": -10,
      "y": -11
    },
    {
      "normalized_weight": 0.17036146720726045,
      "raw_weight": 0.1345855590937358,
      "x": -10,
      "y": -10
    },
    {
      "normalized_weight": 0.15754749205007368,
      "raw_weight": 0.12446251871955824,
      "x": -10,
      "y": -9
    },
    {
      "normalized_weight": 0.18413823118044656,
      "raw_weight": 0.14546920263255284,
      "x": -10,
      "y": -8
    },
    {
      "normalized_weight": 0.1970376029428778,
      "raw_weight": 0.15565970632487353,
      "x": -10,
      "y": -7
    },
    {
      "normalized_weight": 0.19232622622454787,
      "raw_weight": 0.15193771871739287,
      "x": -10,
      "y": -6
    },
    {
      "normalized_weight": 0.23842807462846893,
      "raw_weight": 0.1883581789564905,
      "x": -10,
      "y": -5
    },
    {
      "normalized_weight": 0.3164556962025314,
      "raw_weight": 0.2499999999999999,
      "x": -10,
      "y": -4
    },
    {
      "normalized_weight": 0.4177215189873416,
      "raw_weight": 0.32999999999999996,
      "x": -10,
      "y": -3
    },
    {
      "normalized_weight": 0.5189873417721518,
      "raw_weight": 0.41000000000000003,
      "x": -10,
      "y": -2
    },
    {
      "normalized_weight": 0.620253164556962,
      "raw_weight": 0.4900000000000001,
      "x": -10,
      "y": -1
    },
    {
      "normalized_weight": 0.6835443037974683,
      "raw_weight": 0.5400000000000001,
      "x": -10,
      "y": 0
    },
    {
      "normalized_weight": 0.6329113924050632,
      "raw_weight": 0.5000000000000001,
      "x": -10,
      "y": 1
    },
    {
      "normalized_weight": 0.5822784810126581,
      "raw_weight": 0.4600000000000001,
      "x": -10,
      "y": 2
    },
    {
      "normalized_weight": 0.531645569620253,
      "raw_weight": 0.42000000000000004,
      "x": -10,
      "y": 3
    },
    {
      "normalized_weight": 0.5274373121005365,
      "raw_weight": 0.41667547655942394,
      "x": -10,
      "y": 4
    },
    {
      "normalized_weight": 0.5696202531645568,
      "raw_weight": 0.45,
      "x": -10,
      "y": 5
    },
    {
      "normalized_weight": 0.7468354430379746,
      "raw_weight": 0.5900000000000001,
      "x": -10,
      "y": 6
    },
    {
      "normalized_weight": 0.6962025316455694,
      "raw_weight": 0.55,
      "x": -10,
      "y": 7
    },
    {
      "normalized_weight": 0.6962025316455694,
      "raw_weight": 0.55,
      "x": -10,
      "y": 8
    },
    {
      "normalized_weight": 0.6455696202531643,
      "raw_weight": 0.51,
      "x": -10,
      "y": 9
    },
    {
      "normalized_weight": 0.6455696202531643,
      "raw_weight": 0.51,
      "x": -10,
      "y": 10
    },
    {
      "normalized_weight": 0.5949367088607592,
      "raw_weight": 0.47,
      "x": -10,
      "y": 11
    },
    {
      "normalized_weight": 0.5949367088607592,
      "raw_weight": 0.47,
      "x": -10,
      "y": 12
    },
    {
      "normalized_weight": 0.6075949367088606,
      "raw_weight": 0.48,
      "x": -10,
      "y": 13
    },
    {
      "normalized_weight": 0.5478267829256434,
      "raw_weight": 0.4327831585112584,
      "x": -10,
      "y": 14
    },
    {
      "normalized_weight": 0.5637398007312251,
      "raw_weight": 0.44535444257766793,
      "x": -10,
      "y": 15
    },
    {
      "normalized_weight": 0.0864675114081805,
      "raw_weight": 0.06830933401246261,
      "x": -9,
      "y": -16
    },
    {
      "normalized_weight": 0.08946060458417601,
      "raw_weight": 0.07067387762149907,
      "x": -9,
      "y": -15
    },
    {
      "normalized_weight": 0.09069716301842118,
      "raw_weight": 0.07165075878455275,
      "x": -9,
      "y": -14
    },
    {
      "normalized_weight": 0.0940040519173571,
      "raw_weight": 0.07426320101471214,
      "x": -9,
      "y": -13
    },
    {
      "normalized_weight": 0.15354202173339027,
      "raw_weight": 0.12129819716937834,
      "x": -9,
      "y": -12
    },
    {
      "normalized_weight": 0.16770495660453533,
      "raw_weight": 0.13248691571758295,
      "x": -9,
      "y": -11
    },
    {
      "normalized_weight": 0.17795911876013182,
      "raw_weight": 0.14058770382050417,
      "x": -9,
      "y": -10
    },
    {
      "normalized_weight": 0.18537088759092277,
      "raw_weight": 0.14644300119682904,
      "x": -9,
      "y": -9
    },
    {
      "normalized_weight": 0.19867578372036798,
      "raw_weight": 0.15695386913909076,
      "x": -9,
      "y": -8
    },
    {
      "normalized_weight": 0.20172842152108614,
      "raw_weight": 0.1593654530016581,
      "x": -9,
      "y": -7
    },
    {
      "normalized_weight": 0.1947764576836483,
      "raw_weight": 0.1538734015700822,
      "x": -9,
      "y": -6
    },
    {
      "normalized_weight": 0.22631334704750217,
      "raw_weight": 0.17878754416752676,
      "x": -9,
      "y": -5
    },
    {
      "normalized_weight": 0.3037974683544301,
      "raw_weight": 0.23999999999999988,
      "x": -9,
      "y": -4
    },
    {
      "normalized_weight": 0.40506329113924033,
      "raw_weight": 0.31999999999999995,
      "x": -9,
      "y": -3
    },
    {
      "normalized_weight": 0.5063291139240504,
      "raw_weight": 0.4,
      "x": -9,
      "y": -2
    },
    {
      "normalized_weight": 0.6075949367088607,
      "raw_weight": 0.4800000000000001,
      "x": -9,
      "y": -1
    },
    {
      "normalized_weight": 0.689873417721519,
      "raw_weight": 0.5450000000000002,
      "x": -9,
      "y": 0
    },
    {
      "normalized_weight": 0.6392405063291139,
      "raw_weight": 0.5050000000000001,
      "x": -9,
      "y": 1
    },
    {
      "normalized_weight": 0.5886075949367088,
      "raw_weight": 0.4650000000000001,
      "x": -9,
      "y": 2
    },
    {
      "normalized_weight": 0.5379746835443037,
      "raw_weight": 0.42500000000000004,
      "x": -9,
      "y": 3
    },
    {
      "normalized_weight": 0.6455696202531643,
      "raw_weight": 0.51,
      "x": -9,
      "y": 4
    },
    {
      "normalized_weight": 0.7974683544303797,
      "raw_weight": 0.6300000000000001,
      "x": -9,
      "y": 5
    },
    {
      "normalized_weight": 0.7468354430379746,
      "raw_weight": 0.5900000000000001,
      "x": -9,
      "y": 6
    },
    {
      "normalized_weight": 0.7468354430379746,
      "raw_weight": 0.5900000000000001,
      "x": -9,
      "y": 7
    },
    {
      "normalized_weight": 0.6962025316455694,
      "raw_weight": 0.55,
      "x": -9,
      "y": 8
    },
    {
      "normalized_weight": 0.6962025316455694,
      "raw_weight": 0.55,
      "x": -9,
      "y": 9
    },
    {
      "normalized_weight": 0.6455696202531643,
      "raw_weight": 0.51,
      "x": -9,
      "y": 10
    },
    {
      "normalized_weight": 0.6455696202531643,
      "raw_weight": 0.51,
      "x": -9,
      "y": 11
    },
    {
      "normalized_weight": 0.5949367088607592,
      "raw_weight": 0.47,
      "x": -9,
      "y": 12
    },
    {
      "normalized_weight": 0.5949367088607592,
      "raw_weight": 0.47,
      "x": -9,
      "y": 13
    },
    {
      "normalized_weight": 0.4884978209824009,
      "raw_weight": 0.38591327857609686,
      "x": -9,
      "y": 14
    },
    {
      "normalized_weight": 0.5009751532888768,
      "raw_weight": 0.3957703710982128,
      "x": -9,
      "y": 15
    },
    {
      "normalized_weight": 0.09337659108955854,
      "raw_weight": 0.07376750696075127,
      "x": -8,
      "y": -16
    },
    {
      "normalized_weight": 0.07950189521162641,
      "raw_weight": 0.06280649721718488,
      "x": -8,
      "y": -15
    },
    {
      "normalized_weight": 0.07057116332417124,
      "raw_weight": 0.0557512190260953,
      "x": -8,
      "y": -14
    },
    {
      "normalized_weight": 0.09290027773406666,
      "raw_weight": 0.07339121940991268,
      "x": -8,
      "y": -13
    },
    {
      "normalized_weight": 0.13758680211713342,
      "raw_weight": 0.10869357367253545,
      "x": -8,
      "y": -12
    },
    {
      "normalized_weight": 0.16231708276335213,
      "raw_weight": 0.12823049538304823,
      "x": -8,
      "y": -11
    },
    {
      "normalized_weight": 0.16751277177969193,
      "raw_weight": 0.13233508970595667,
      "x": -8,
      "y": -10
    },
    {
      "normalized_weight": 0.20188913761826754,
      "raw_weight": 0.15949241871843142,
      "x": -8,
      "y": -9
    },
    {
      "normalized_weight": 0.194775520638996,
      "raw_weight": 0.1538726613048069,
      "x": -8,
      "y": -8
    },
    {
      "normalized_weight": 0.19934368932571456,
      "raw_weight": 0.15748151456731455,
      "x": -8,
      "y": -7
    },
    {
      "normalized_weight": 0.19135623231463633,
      "raw_weight": 0.15117142352856275,
      "x": -8,
      "y": -6
    },
    {
      "normalized_weight": 0.19825869044215422,
      "raw_weight": 0.1566243654493019,
      "x": -8,
      "y": -5
    },
    {
      "normalized_weight": 0.2453690550201348,
      "raw_weight": 0.19384155346590656,
      "x": -8,
      "y": -4
    },
    {
      "normalized_weight": 0.296658912250051,
      "raw_weight": 0.23436054067754034,
      "x": -8,
      "y": -3
    },
    {
      "normalized_weight": 0.3318111313057852,
      "raw_weight": 0.2621307937315704,
      "x": -8,
      "y": -2
    },
    {
      "normalized_weight": 0.35835730446944014,
      "raw_weight": 0.2831022705308578,
      "x": -8,
      "y": -1
    },
    {
      "normalized_weight": 0.3877767090882371,
      "raw_weight": 0.3063436001797074,
      "x": -8,
      "y": 0
    },
    {
      "normalized_weight": 0.42216067173453825,
      "raw_weight": 0.3335069306702853,
      "x": -8,
      "y": 1
    },
    {
      "normalized_weight": 0.4305447698707826,
      "raw_weight": 0.34013036819791836,
      "x": -8,
      "y": 2
    },
    {
      "normalized_weight": 0.46317657968592935,
      "raw_weight": 0.3659094979518843,
      "x": -8,
      "y": 3
    },
    {
      "normalized_weight": 0.8481012658227848,
      "raw_weight": 0.6700000000000002,
      "x": -8,
      "y": 4
    },
    {
      "normalized_weight": 0.7974683544303797,
      "raw_weight": 0.6300000000000001,
      "x": -8,
      "y": 5
    },
    {
      "normalized_weight": 0.7974683544303797,
      "raw_weight": 0.6300000000000001,
      "x": -8,
      "y": 6
    },
    {
      "normalized_weight": 0.7468354430379746,
      "raw_weight": 0.5900000000000001,
      "x": -8,
      "y": 7
    },
    {
      "normalized_weight": 0.7468354430379746,
      "raw_weight": 0.5900000000000001,
      "x": -8,
      "y": 8
    },
    {
      "normalized_weight": 0.6962025316455694,
      "raw_weight": 0.55,
      "x": -8,
      "y": 9
    },
    {
      "normalized_weight": 0.6962025316455694,
      "raw_weight": 0.55,
      "x": -8,
      "y": 10
    },
    {
      "normalized_weight": 0.6455696202531643,
      "raw_weight": 0.51,
      "x": -8,
      "y": 11
    },
    {
      "normalized_weight": 0.6455696202531643,
      "raw_weight": 0.51,
      "x": -8,
      "y": 12
    },
    {
      "normalized_weight": 0.4705887245756725,
      "raw_weight": 0.3717650924147814,
      "x": -8,
      "y": 13
    },
    {
      "normalized_weight": 0.46547848543436215,
      "raw_weight": 0.3677280034931462,
      "x": -8,
      "y": 14
    },
    {
      "normalized_weight": 0.4555763322651674,
      "raw_weight": 0.3599053024894824,
      "x": -8,
      "y": 15
    },
    {
      "normalized_weight": 0.06779386136046767,
      "raw_weight": 0.05355715047476947,
      "x": -7,
      "y": -16
    },
    {
      "normalized_weight": 0.06874645743122575,
      "raw_weight": 0.05430970137066836,
      "x": -7,
      "y": -15
    },
    {
      "normalized_weight": 0.0515417019501665,
      "raw_weight": 0.04071794454063155,
      "x": -7,
      "y": -14
    },
    {
      "normalized_weight": 0.07748745891631746,
      "raw_weight": 0.06121509254389082,
      "x": -7,
      "y": -13
    },
    {
      "normalized_weight": 0.13602432516706003,
      "raw_weight": 0.10745921688197746,
      "x": -7,
      "y": -12
    },
    {
      "normalized_weight": 0.1606943688303656,
      "raw_weight": 0.12694855137598887,
      "x": -7,
      "y": -11
    },
    {
      "normalized_weight": 0.1606078818875996,
      "raw_weight": 0.12688022669120375,
      "x": -7,
      "y": -10
    },
    {
      "normalized_weight": 0.18330603169088214,
      "raw_weight": 0.14481176503579693,
      "x": -7,
      "y": -9
    },
    {
      "normalized_weight": 0.15973238347667928,
      "raw_weight": 0.12618858294657667,
      "x": -7,
      "y": -8
    },
    {
      "normalized_weight": 0.16189770613675003,
      "raw_weight": 0.12789918784803256,
      "x": -7,
      "y": -7
    },
    {
      "normalized_weight": 0.1798621175494097,
      "raw_weight": 0.14209107286403372,
      "x": -7,
      "y": -6
    },
    {
      "normalized_weight": 0.1657909803420822,
      "raw_weight": 0.13097487447024497,
      "x": -7,
      "y": -5
    },
    {
      "normalized_weight": 0.17917749885704476,
      "raw_weight": 0.1415502240970654,
      "x": -7,
      "y": -4
    },
    {
      "normalized_weight": 0.23515494550654578,
      "raw_weight": 0.18577240695017122,
      "x": -7,
      "y": -3
    },
    {
      "normalized_weight": 0.2975052491446453,
      "raw_weight": 0.2350291468242699,
      "x": -7,
      "y": -2
    },
    {
      "normalized_weight": 0.33506052630579164,
      "raw_weight": 0.2646978157815755,
      "x": -7,
      "y": -1
    },
    {
      "normalized_weight": 0.3869250704092924,
      "raw_weight": 0.3056708056233411,
      "x": -7,
      "y": 0
    },
    {
      "normalized_weight": 0.41558753546940996,
      "raw_weight": 0.328314153020834,
      "x": -7,
      "y": 1
    },
    {
      "normalized_weight": 0.4261832212357378,
      "raw_weight": 0.336684744776233,
      "x": -7,
      "y": 2
    },
    {
      "normalized_weight": 0.8987341772151898,
      "raw_weight": 0.7100000000000002,
      "x": -7,
      "y": 3
    },
    {
      "normalized_weight": 0.8481012658227848,
      "raw_weight": 0.6700000000000002,
      "x": -7,
      "y": 4
    },
    {
      "normalized_weight": 0.8481012658227848,
      "raw_weight": 0.6700000000000002,
      "x": -7,
      "y": 5
    },
    {
      "normalized_weight": 0.7974683544303797,
      "raw_weight": 0.6300000000000001,
      "x": -7,
      "y": 6
    },
    {
      "normalized_weight": 0.7974683544303797,
      "raw_weight": 0.6300000000000001,
      "x": -7,
      "y": 7
    },
    {
      "normalized_weight": 0.7468354430379746,
      "raw_weight": 0.5900000000000001,
      "x": -7,
      "y": 8
    },
    {
      "normalized_weight": 0.7468354430379746,
      "raw_weight": 0.5900000000000001,
      "x": -7,
      "y": 9
    },
    {
      "normalized_weight": 0.6962025316455694,
      "raw_weight": 0.55,
      "x": -7,
      "y": 10
    },
    {
      "normalized_weight": 0.6962025316455694,
      "raw_weight": 0.55,
      "x": -7,
      "y": 11
    },
    {
      "normalized_weight": 0.4702793809464313,
      "raw_weight": 0.37152071094768085,
      "x": -7,
      "y": 12
    },
    {
      "normalized_weight": 0.45685862441711833,
      "raw_weight": 0.3609183132895236,
      "x": -7,
      "y": 13
    },
    {
      "normalized_weight": 0.41922233364437117,
      "raw_weight": 0.33118564357905333,
      "x": -7,
      "y": 14
    },
    {
      "normalized_weight": 0.39782580708233967,
      "raw_weight": 0.31428238759504845,
      "x": -7,
      "y": 15
    },
    {
      "normalized_weight": 0.024182819429406158,
      "raw_weight": 0.01910442734923087,
      "x": -6,
      "y": -16
    },
    {
      "normalized_weight": 0.06405493998074908,
      "raw_weight": 0.05060340258479179,
      "x": -6,
      "y": -15
    },
    {
      "normalized_weight": 0.04832840705531216,
      "raw_weight": 0.03817944157369662,
      "x": -6,
      "y": -14
    },
    {
      "normalized_weight": 0.06430464281152778,
      "raw_weight": 0.05080066782110697,
      "x": -6,
      "y": -13
    },
    {
      "normalized_weight": 0.10856947795829389,
      "raw_weight": 0.0857698875870522,
      "x": -6,
      "y": -12
    },
    {
      "normalized_weight": 0.1233940705460366,
      "raw_weight": 0.09748131573136895,
      "x": -6,
      "y": -11
    },
    {
      "normalized_weight": 0.12179271970444194,
      "raw_weight": 0.09621624856650916,
      "x": -6,
      "y": -10
    },
    {
      "normalized_weight": 0.12897924318739565,
      "raw_weight": 0.10189360211804259,
      "x": -6,
      "y": -9
    },
    {
      "normalized_weight": 0.12135453250380329,
      "raw_weight": 0.09587008067800463,
      "x": -6,
      "y": -8
    },
    {
      "normalized_weight": 0.11863648480080703,
      "raw_weight": 0.09372282299263758,
      "x": -6,
      "y": -7
    },
    {
      "normalized_weight": 0.14168496481298085,
      "raw_weight": 0.1119311222022549,
      "x": -6,
      "y": -6
    },
    {
      "normalized_weight": 0.15375704775669077,
      "raw_weight": 0.12146806772778575,
      "x": -6,
      "y": -5
    },
    {
      "normalized_weight": 0.16553042170390098,
      "raw_weight": 0.13076903314608182,
      "x": -6,
      "y": -4
    },
    {
      "normalized_weight": 0.19932819251851053,
      "raw_weight": 0.15746927208962336,
      "x": -6,
      "y": -3
    },
    {
      "normalized_weight": 0.24809861311231152,
      "raw_weight": 0.19599790435872616,
      "x": -6,
      "y": -2
    },
    {
      "normalized_weight": 0.30224207959144106,
      "raw_weight": 0.2387712428772385,
      "x": -6,
      "y": -1
    },
    {
      "normalized_weight": 0.37302529550626945,
      "raw_weight": 0.29468998344995295,
      "x": -6,
      "y": 0
    },
    {
      "normalized_weight": 0.40309468397892856,
      "raw_weight": 0.31844480034335365,
      "x": -6,
      "y": 1
    },
    {
      "normalized_weight": 0.9493670886075949,
      "raw_weight": 0.7500000000000002,
      "x": -6,
      "y": 2
    },
    {
      "normalized_weight": 0.8987341772151898,
      "raw_weight": 0.7100000000000002,
      "x": -6,
      "y": 3
    },
    {
      "normalized_weight": 0.8987341772151898,
      "raw_weight": 0.7100000000000002,
      "x": -6,
      "y": 4
    },
    {
      "normalized_weight": 0.8481012658227848,
      "raw_weight": 0.6700000000000002,
      "x": -6,
      "y": 5
    },
    {
      "normalized_weight": 0.8481012658227848,
      "raw_weight": 0.6700000000000002,
      "x": -6,
      "y": 6
    },
    {
      "normalized_weight": 0.7974683544303797,
      "raw_weight": 0.6300000000000001,
      "x": -6,
      "y": 7
    },
    {
      "normalized_weight": 0.7974683544303797,
      "raw_weight": 0.6300000000000001,
      "x": -6,
      "y": 8
    },
    {
      "normalized_weight": 0.7468354430379746,
      "raw_weight": 0.5900000000000001,
      "x": -6,
      "y": 9
    },
    {
      "normalized_weight": 0.7468354430379746,
      "raw_weight": 0.5900000000000001,
      "x": -6,
      "y": 10
    },
    {
      "normalized_weight": 0.47779515142910484,
      "raw_weight": 0.3774581696289929,
      "x": -6,
      "y": 11
    },
    {
      "normalized_weight": 0.4549440762821138,
      "raw_weight": 0.35940582026287005,
      "x": -6,
      "y": 12
    },
    {
      "normalized_weight": 0.39973742539293383,
      "raw_weight": 0.31579256606041783,
      "x": -6,
      "y": 13
    },
    {
      "normalized_weight": 0.36546148814030377,
      "raw_weight": 0.2887145756308401,
      "x": -6,
      "y": 14
    },
    {
      "normalized_weight": 0.3506824475279585,
      "raw_weight": 0.2770391335470873,
      "x": -6,
      "y": 15
    },
    {
      "normalized_weight": -0.022671237508274843,
      "raw_weight": -0.01791027763153713,
      "x": -5,
      "y": -16
    },
    {
      "normalized_weight": 0.026403341918106896,
      "raw_weight": 0.020858640115304455,
      "x": -5,
      "y": -15
    },
    {
      "normalized_weight": 0.03769530741676754,
      "raw_weight": 0.029779292859246367,
      "x": -5,
      "y": -14
    },
    {
      "normalized_weight": 0.03972186073336634,
      "raw_weight": 0.031380269979359415,
      "x": -5,
      "y": -13
    },
    {
      "normalized_weight": 0.04462666372872071,
      "raw_weight": 0.035255064345689376,
      "x": -5,
      "y": -12
    },
    {
      "normalized_weight": 0.07445619459962687,
      "raw_weight": 0.05882039373370525,
      "x": -5,
      "y": -11
    },
    {
      "normalized_weight": 0.06591930893023952,
      "raw_weight": 0.05207625405488924,
      "x": -5,
      "y": -10
    },
    {
      "normalized_weight": 0.08422744663229838,
      "raw_weight": 0.06653968283951574,
      "x": -5,
      "y": -9
    },
    {
      "normalized_weight": 0.08661206187408134,
      "raw_weight": 0.06842352888052428,
      "x": -5,
      "y": -8
    },
    {
      "normalized_weight": 0.10037309810204177,
      "raw_weight": 0.07929474750061302,
      "x": -5,
      "y": -7
    },
    {
      "normalized_weight": 0.13134067308786052,
      "raw_weight": 0.10375913173940984,
      "x": -5,
      "y": -6
    },
    {
      "normalized_weight": 0.14895185720597684,
      "raw_weight": 0.11767196719272174,
      "x": -5,
      "y": -5
    },
    {
      "normalized_weight": 0.1641346456876301,
      "raw_weight": 0.12966637009322782,
      "x": -5,
      "y": -4
    },
    {
      "normalized_weight": 0.1779631931908974,
      "raw_weight": 0.140590922620809,
      "x": -5,
      "y": -3
    },
    {
      "normalized_weight": 0.23602457736393856,
      "raw_weight": 0.18645941611751152,
      "x": -5,
      "y": -2
    },
    {
      "normalized_weight": 0.2874873334159922,
      "raw_weight": 0.2271149933986339,
      "x": -5,
      "y": -1
    },
    {
      "normalized_weight": 0.3272299027824715,
      "raw_weight": 0.2585116231981526,
      "x": -5,
      "y": 0
    },
    {
      "normalized_weight": 1,
      "raw_weight": 0.7900000000000003,
      "x": -5,
      "y": 1
    },
    {
      "normalized_weight": 0.9493670886075949,
      "raw_weight": 0.7500000000000002,
      "x": -5,
      "y": 2
    },
    {
      "normalized_weight": 0.9493670886075949,
      "raw_weight": 0.7500000000000002,
      "x": -5,
      "y": 3
    },
    {
      "normalized_weight": 0.8987341772151898,
      "raw_weight": 0.7100000000000002,
      "x": -5,
      "y": 4
    },
    {
      "normalized_weight": 0.8987341772151898,
      "raw_weight": 0.7100000000000002,
      "x": -5,
      "y": 5
    },
    {
      "normalized_weight": 0.8481012658227848,
      "raw_weight": 0.6700000000000002,
      "x": -5,
      "y": 6
    },
    {
      "normalized_weight": 0.8481012658227848,
      "raw_weight": 0.6700000000000002,
      "x": -5,
      "y": 7
    },
    {
      "normalized_weight": 0.7974683544303797,
      "raw_weight": 0.6300000000000001,
      "x": -5,
      "y": 8
    },
    {
      "normalized_weight": 0.7974683544303797,
      "raw_weight": 0.6300000000000001,
      "x": -5,
      "y": 9
    },
    {
      "normalized_weight": 0.5696202531645568,
      "raw_weight": 0.45,
      "x": -5,
      "y": 10
    },
    {
      "normalized_weight": 0.45251864732972125,
      "raw_weight": 0.3574897313904799,
      "x": -5,
      "y": 11
    },
    {
      "normalized_weight": 0.4163523596343841,
      "raw_weight": 0.32891836411116354,
      "x": -5,
      "y": 12
    },
    {
      "normalized_weight": 0.3733704413409878,
      "raw_weight": 0.29496264865938043,
      "x": -5,
      "y": 13
    },
    {
      "normalized_weight": 0.33566038251447894,
      "raw_weight": 0.26517170218643843,
      "x": -5,
      "y": 14
    },
    {
      "normalized_weight": 0.30689759584756987,
      "raw_weight": 0.24244910071958028,
      "x": -5,
      "y": 15
    },
    {
      "normalized_weight": -0.07668378311763074,
      "raw_weight": -0.06058018866292831,
      "x": -4,
      "y": -16
    },
    {
      "normalized_weight": -0.029781042312263015,
      "raw_weight": -0.02352702342668779,
      "x": -4,
      "y": -15
    },
    {
      "normalized_weight": -0.00463845475740551,
      "raw_weight": -0.0036643792583503543,
      "x": -4,
      "y": -14
    },
    {
      "normalized_weight": 0.0030510449610059785,
      "raw_weight": 0.0024103255191947237,
      "x": -4,
      "y": -13
    },
    {
      "normalized_weight": 0.013612686358064164,
      "raw_weight": 0.010754022222870693,
      "x": -4,
      "y": -12
    },
    {
      "normalized_weight": 0.017504125365430955,
      "raw_weight": 0.01382825903869046,
      "x": -4,
      "y": -11
    },
    {
      "normalized_weight": 0.014709768259455445,
      "raw_weight": 0.011620716924969805,
      "x": -4,
      "y": -10
    },
    {
      "normalized_weight": 0.04725471563555667,
      "raw_weight": 0.037331225352089784,
      "x": -4,
      "y": -9
    },
    {
      "normalized_weight": 0.06253596567635356,
      "raw_weight": 0.04940341288431932,
      "x": -4,
      "y": -8
    },
    {
      "normalized_weight": 0.061082424594806374,
      "raw_weight": 0.04825511542989705,
      "x": -4,
      "y": -7
    },
    {
      "normalized_weight": 0.10343449497005017,
      "raw_weight": 0.08171325102633965,
      "x": -4,
      "y": -6
    },
    {
      "normalized_weight": 0.12643836610988352,
      "raw_weight": 0.09988630922680801,
      "x": -4,
      "y": -5
    },
    {
      "normalized_weight": 0.15024852439957861,
      "raw_weight": 0.11869633427566714,
      "x": -4,
      "y": -4
    },
    {
      "normalized_weight": 0.15602293413176552,
      "raw_weight": 0.12325811796409479,
      "x": -4,
      "y": -3
    },
    {
      "normalized_weight": 0.19325073485976732,
      "raw_weight": 0.15266808053921624,
      "x": -4,
      "y": -2
    },
    {
      "normalized_weight": 0.2463575454058443,
      "raw_weight": 0.19462246087061708,
      "x": -4,
      "y": -1
    },
    {
      "normalized_weight": 0.2818874948639752,
      "raw_weight": 0.22269112094254045,
      "x": -4,
      "y": 0
    },
    {
      "normalized_weight": 1,
      "raw_weight": 0.7900000000000003,
      "x": -4,
      "y": 1
    },
    {
      "normalized_weight": 1,
      "raw_weight": 0.7900000000000003,
      "x": -4,
      "y": 2
    },
    {
      "normalized_weight": 0.9493670886075949,
      "raw_weight": 0.7500000000000002,
      "x": -4,
      "y": 3
    },
    {
      "normalized_weight": 0.9493670886075949,
      "raw_weight": 0.7500000000000002,
      "x": -4,
      "y": 4
    },
    {
      "normalized_weight": 0.8987341772151898,
      "raw_weight": 0.7100000000000002,
      "x": -4,
      "y": 5
    },
    {
      "normalized_weight": 0.8987341772151898,
      "raw_weight": 0.7100000000000002,
      "x": -4,
      "y": 6
    },
    {
      "normalized_weight": 0.8481012658227848,
      "raw_weight": 0.6700000000000002,
      "x": -4,
      "y": 7
    },
    {
      "normalized_weight": 0.8481012658227848,
      "raw_weight": 0.6700000000000002,
      "x": -4,
      "y": 8
    },
    {
      "normalized_weight": 0.5063291139240504,
      "raw_weight": 0.4,
      "x": -4,
      "y": 9
    },
    {
      "normalized_weight": 0.5131136039590285,
      "raw_weight": 0.4053597471276327,
      "x": -4,
      "y": 10
    },
    {
      "normalized_weight": 0.5185615746287552,
      "raw_weight": 0.4096636439567167,
      "x": -4,
      "y": 11
    },
    {
      "normalized_weight": 0.3567784080206492,
      "raw_weight": 0.281854942336313,
      "x": -4,
      "y": 12
    },
    {
      "normalized_weight": 0.3411000889417842,
      "raw_weight": 0.26946907026400957,
      "x": -4,
      "y": 13
    },
    {
      "normalized_weight": 0.3115540401681013,
      "raw_weight": 0.24612769173280008,
      "x": -4,
      "y": 14
    },
    {
      "normalized_weight": 0.26573018906667045,
      "raw_weight": 0.20992684936266973,
      "x": -4,
      "y": 15
    },
    {
      "normalized_weight": -0.15706563861987008,
      "raw_weight": -0.1240818545096974,
      "x": -3,
      "y": -16
    },
    {
      "normalized_weight": -0.10735345747435128,
      "raw_weight": -0.08480923140473753,
      "x": -3,
      "y": -15
    },
    {
      "normalized_weight": -0.08224375157833701,
      "raw_weight": -0.06497256374688626,
      "x": -3,
      "y": -14
    },
    {
      "normalized_weight": -0.06374482898918497,
      "raw_weight": -0.05035841490145614,
      "x": -3,
      "y": -13
    },
    {
      "normalized_weight": -0.03490721059165359,
      "raw_weight": -0.027576696367406343,
      "x": -3,
      "y": -12
    },
    {
      "normalized_weight": -0.03280392202723305,
      "raw_weight": -0.025915098401514115,
      "x": -3,
      "y": -11
    },
    {
      "normalized_weight": -0.03711361859269087,
      "raw_weight": -0.029319758688225797,
      "x": -3,
      "y": -10
    },
    {
      "normalized_weight": -0.029203643398557712,
      "raw_weight": -0.0230708782848606,
      "x": -3,
      "y": -9
    },
    {
      "normalized_weight": 0.0092290729114705,
      "raw_weight": 0.007290967600061696,
      "x": -3,
      "y": -8
    },
    {
      "normalized_weight": 0.02940889778722706,
      "raw_weight": 0.023233029251909385,
      "x": -3,
      "y": -7
    },
    {
      "normalized_weight": 0.06842041486011556,
      "raw_weight": 0.05405212773949131,
      "x": -3,
      "y": -6
    },
    {
      "normalized_weight": 0.083783493844069,
      "raw_weight": 0.06618896013681452,
      "x": -3,
      "y": -5
    },
    {
      "normalized_weight": 0.09107762789196175,
      "raw_weight": 0.0719513260346498,
      "x": -3,
      "y": -4
    },
    {
      "normalized_weight": 0.11014136535247551,
      "raw_weight": 0.08701167862845569,
      "x": -3,
      "y": -3
    },
    {
      "normalized_weight": 0.13216126190681682,
      "raw_weight": 0.10440739690638531,
      "x": -3,
      "y": -2
    },
    {
      "normalized_weight": 0.18163409947333614,
      "raw_weight": 0.1434909385839356,
      "x": -3,
      "y": -1
    },
    {
      "normalized_weight": 0.2528378612341604,
      "raw_weight": 0.1997419103749868,
      "x": -3,
      "y": 0
    },
    {
      "normalized_weight": 0.2758263563867576,
      "raw_weight": 0.21790282154553858,
      "x": -3,
      "y": 1
    },
    {
      "normalized_weight": 1,
      "raw_weight": 0.7900000000000003,
      "x": -3,
      "y": 2
    },
    {
      "normalized_weight": 1,
      "raw_weight": 0.7900000000000003,
      "x": -3,
      "y": 3
    },
    {
      "normalized_weight": 0.9493670886075949,
      "raw_weight": 0.7500000000000002,
      "x": -3,
      "y": 4
    },
    {
      "normalized_weight": 0.9493670886075949,
      "raw_weight": 0.7500000000000002,
      "x": -3,
      "y": 5
    },
    {
      "normalized_weight": 0.8987341772151898,
      "raw_weight": 0.7100000000000002,
      "x": -3,
      "y": 6
    },
    {
      "normalized_weight": 0.8987341772151898,
      "raw_weight": 0.7100000000000002,
      "x": -3,
      "y": 7
    },
    {
      "normalized_weight": 0.6329113924050631,
      "raw_weight": 0.5,
      "x": -3,
      "y": 8
    },
    {
      "normalized_weight": 0.4430379746835441,
      "raw_weight": 0.35,
      "x": -3,
      "y": 9
    },
    {
      "normalized_weight": 0.4273924233503009,
      "raw_weight": 0.33764001444673786,
      "x": -3,
      "y": 10
    },
    {
      "normalized_weight": 0.3916095655474759,
      "raw_weight": 0.30937155678250605,
      "x": -3,
      "y": 11
    },
    {
      "normalized_weight": 0.29482291239920666,
      "raw_weight": 0.23291010079537336,
      "x": -3,
      "y": 12
    },
    {
      "normalized_weight": 0.2964707467185342,
      "raw_weight": 0.23421188990764208,
      "x": -3,
      "y": 13
    },
    {
      "normalized_weight": 0.2523551597963133,
      "raw_weight": 0.19936057623908757,
      "x": -3,
      "y": 14
    },
    {
      "normalized_weight": 0.22195600469575952,
      "raw_weight": 0.17534524370965007,
      "x": -3,
      "y": 15
    },
    {
      "normalized_weight": -0.23084271056053832,
      "raw_weight": -0.18236574134282532,
      "x": -2,
      "y": -16
    },
    {
      "normalized_weight": -0.1689434371677797,
      "raw_weight": -0.13346531536254602,
      "x": -2,
      "y": -15
    },
    {
      "normalized_weight": -0.13487502440229432,
      "raw_weight": -0.10655126927781254,
      "x": -2,
      "y": -14
    },
    {
      "normalized_weight": -0.11200730844166454,
      "raw_weight": -0.08848577366891501,
      "x": -2,
      "y": -13
    },
    {
      "normalized_weight": -0.08077491012398696,
      "raw_weight": -0.06381217899794972,
      "x": -2,
      "y": -12
    },
    {
      "normalized_weight": -0.0914664134206824,
      "raw_weight": -0.07225846660233912,
      "x": -2,
      "y": -11
    },
    {
      "normalized_weight": -0.10990942785278549,
      "raw_weight": -0.08682844800370056,
      "x": -2,
      "y": -10
    },
    {
      "normalized_weight": -0.10112433268943911,
      "raw_weight": -0.07988822282465692,
      "x": -2,
      "y": -9
    },
    {
      "normalized_weight": -0.062147589338180834,
      "raw_weight": -0.04909659557716287,
      "x": -2,
      "y": -8
    },
    {
      "normalized_weight": -0.018500074857417486,
      "raw_weight": -0.014615059137359818,
      "x": -2,
      "y": -7
    },
    {
      "normalized_weight": -0.001547961675284273,
      "raw_weight": -0.001222889723474576,
      "x": -2,
      "y": -6
    },
    {
      "normalized_weight": 0.007145610361876461,
      "raw_weight": 0.005645032185882406,
      "x": -2,
      "y": -5
    },
    {
      "normalized_weight": 0.03931291360889588,
      "raw_weight": 0.031057201751027757,
      "x": -2,
      "y": -4
    },
    {
      "normalized_weight": 0.0693878236804419,
      "raw_weight": 0.054816380707549114,
      "x": -2,
      "y": -3
    },
    {
      "normalized_weight": 0.1014365997244244,
      "raw_weight": 0.0801349137822953,
      "x": -2,
      "y": -2
    },
    {
      "normalized_weight": 0.13193937311023285,
      "raw_weight": 0.10423210475708398,
      "x": -2,
      "y": -1
    },
    {
      "normalized_weight": 0.1861625975106441,
      "raw_weight": 0.14706845203340888,
      "x": -2,
      "y": 0
    },
    {
      "normalized_weight": 0.23124293051399267,
      "raw_weight": 0.18268191510605428,
      "x": -2,
      "y": 1
    },
    {
      "normalized_weight": 0.24958283010489313,
      "raw_weight": 0.19717043578286564,
      "x": -2,
      "y": 2
    },
    {
      "normalized_weight": 1,
      "raw_weight": 0.7900000000000003,
      "x": -2,
      "y": 3
    },
    {
      "normalized_weight": 1,
      "raw_weight": 0.7900000000000003,
      "x": -2,
      "y": 4
    },
    {
      "normalized_weight": 0.9493670886075949,
      "raw_weight": 0.7500000000000002,
      "x": -2,
      "y": 5
    },
    {
      "normalized_weight": 0.9493670886075949,
      "raw_weight": 0.7500000000000002,
      "x": -2,
      "y": 6
    },
    {
      "normalized_weight": 0.26005056510279345,
      "raw_weight": 0.20543994643120692,
      "x": -2,
      "y": 7
    },
    {
      "normalized_weight": 0.2445871258689737,
      "raw_weight": 0.19322382943648928,
      "x": -2,
      "y": 8
    },
    {
      "normalized_weight": 0.3843864491356707,
      "raw_weight": 0.30366529481717996,
      "x": -2,
      "y": 9
    },
    {
      "normalized_weight": 0.3547059621276069,
      "raw_weight": 0.28021771008080953,
      "x": -2,
      "y": 10
    },
    {
      "normalized_weight": 0.26024685055739727,
      "raw_weight": 0.2055950119403439,
      "x": -2,
      "y": 11
    },
    {
      "normalized_weight": 0.23013429995865117,
      "raw_weight": 0.1818060969673345,
      "x": -2,
      "y": 12
    },
    {
      "normalized_weight": 0.23840292646315092,
      "raw_weight": 0.1883383119058893,
      "x": -2,
      "y": 13
    },
    {
      "normalized_weight": 0.2043779878440139,
      "raw_weight": 0.16145861039677104,
      "x": -2,
      "y": 14
    },
    {
      "normalized_weight": 0.17819907859986298,
      "raw_weight": 0.1407772720938918,
      "x": -2,
      "y": 15
    },
    {
      "normalized_weight": -0.2648851097333221,
      "raw_weight": -0.20925923668932453,
      "x": -1,
      "y": -16
    },
    {
      "normalized_weight": -0.23455138493002814,
      "raw_weight": -0.1852955940947223,
      "x": -1,
      "y": -15
    },
    {
      "normalized_weight": -0.20797293805982617,
      "raw_weight": -0.16429862106726273,
      "x": -1,
      "y": -14
    },
    {
      "normalized_weight": -0.1707066465725699,
      "raw_weight": -0.13485825079233027,
      "x": -1,
      "y": -13
    },
    {
      "normalized_weight": -0.15537906370210142,
      "raw_weight": -0.12274946032466016,
      "x": -1,
      "y": -12
    },
    {
      "normalized_weight": -0.16353788651550175,
      "raw_weight": -0.1291949303472464,
      "x": -1,
      "y": -11
    },
    {
      "normalized_weight": -0.17061584329225593,
      "raw_weight": -0.13478651620088222,
      "x": -1,
      "y": -10
    },
    {
      "normalized_weight": -0.17152872211859296,
      "raw_weight": -0.1355076904736885,
      "x": -1,
      "y": -9
    },
    {
      "normalized_weight": -0.16147208305569333,
      "raw_weight": -0.12756294561399778,
      "x": -1,
      "y": -8
    },
    {
      "normalized_weight": -0.1051583553995906,
      "raw_weight": -0.0830751007656766,
      "x": -1,
      "y": -7
    },
    {
      "normalized_weight": -0.06992966383026654,
      "raw_weight": -0.05524443442591058,
      "x": -1,
      "y": -6
    },
    {
      "normalized_weight": -0.07689032411662962,
      "raw_weight": -0.06074335605213742,
      "x": -1,
      "y": -5
    },
    {
      "normalized_weight": -0.04508887683445805,
      "raw_weight": -0.03562021269922187,
      "x": -1,
      "y": -4
    },
    {
      "normalized_weight": -0.006120976635963624,
      "raw_weight": -0.004835571542411265,
      "x": -1,
      "y": -3
    },
    {
      "normalized_weight": 0.023669318028027672,
      "raw_weight": 0.018698761242141867,
      "x": -1,
      "y": -2
    },
    {
      "normalized_weight": 0.06390126329605576,
      "raw_weight": 0.05048199800388407,
      "x": -1,
      "y": -1
    },
    {
      "normalized_weight": 0.11494704171512882,
      "raw_weight": 0.0908081629549518,
      "x": -1,
      "y": 0
    },
    {
      "normalized_weight": 0.15622568430900505,
      "raw_weight": 0.12341829060411404,
      "x": -1,
      "y": 1
    },
    {
      "normalized_weight": 0.17776987751112383,
      "raw_weight": 0.14043820323378786,
      "x": -1,
      "y": 2
    },
    {
      "normalized_weight": 0.18677046223140076,
      "raw_weight": 0.14754866516280665,
      "x": -1,
      "y": 3
    },
    {
      "normalized_weight": 1,
      "raw_weight": 0.7900000000000003,
      "x": -1,
      "y": 4
    },
    {
      "normalized_weight": 1,
      "raw_weight": 0.7900000000000003,
      "x": -1,
      "y": 5
    },
    {
      "normalized_weight": 0.19041616974954934,
      "raw_weight": 0.15042877410214403,
      "x": -1,
      "y": 6
    },
    {
      "normalized_weight": 0.18331958187402375,
      "raw_weight": 0.14482246968047882,
      "x": -1,
      "y": 7
    },
    {
      "normalized_weight": 0.18091365368977078,
      "raw_weight": 0.14292178641491896,
      "x": -1,
      "y": 8
    },
    {
      "normalized_weight": 0.31249903484798663,
      "raw_weight": 0.2468742375299095,
      "x": -1,
      "y": 9
    },
    {
      "normalized_weight": 0.3166171903524171,
      "raw_weight": 0.2501275803784096,
      "x": -1,
      "y": 10
    },
    {
      "normalized_weight": 0.2093426251096275,
      "raw_weight": 0.1653806738366058,
      "x": -1,
      "y": 11
    },
    {
      "normalized_weight": 0.1686584564871964,
      "raw_weight": 0.1332401806248852,
      "x": -1,
      "y": 12
    },
    {
      "normalized_weight": 0.1584701934888298,
      "raw_weight": 0.12519145285617558,
      "x": -1,
      "y": 13
    },
    {
      "normalized_weight": 0.11880842969166364,
      "raw_weight": 0.0938586594564143,
      "x": -1,
      "y": 14
    },
    {
      "normalized_weight": 0.1195579689190038,
      "raw_weight": 0.09445079544601304,
      "x": -1,
      "y": 15
    },
    {
      "normalized_weight": -0.31371681935366247,
      "raw_weight": -0.24783628728939341,
      "x": 0,
      "y": -16
    },
    {
      "normalized_weight": -0.27901033522337215,
      "raw_weight": -0.2204181648264641,
      "x": 0,
      "y": -15
    },
    {
      "normalized_weight": -0.2624276051720661,
      "raw_weight": -0.20731780808593228,
      "x": 0,
      "y": -14
    },
    {
      "normalized_weight": -0.23709799021673605,
      "raw_weight": -0.18730741227122155,
      "x": 0,
      "y": -13
    },
    {
      "normalized_weight": -0.23580608355947913,
      "raw_weight": -0.18628680601198858,
      "x": 0,
      "y": -12
    },
    {
      "normalized_weight": -0.24438323302417195,
      "raw_weight": -0.1930627540890959,
      "x": 0,
      "y": -11
    },
    {
      "normalized_weight": -0.23520760000727375,
      "raw_weight": -0.18581400400574632,
      "x": 0,
      "y": -10
    },
    {
      "normalized_weight": -0.22804274641758163,
      "raw_weight": -0.18015376966988955,
      "x": 0,
      "y": -9
    },
    {
      "normalized_weight": -0.22461066103732413,
      "raw_weight": -0.1774424222194861,
      "x": 0,
      "y": -8
    },
    {
      "normalized_weight": -0.18992873710157773,
      "raw_weight": -0.15004370231024647,
      "x": 0,
      "y": -7
    },
    {
      "normalized_weight": -0.1692634744474915,
      "raw_weight": -0.13371814481351835,
      "x": 0,
      "y": -6
    },
    {
      "normalized_weight": -0.16227396139319708,
      "raw_weight": -0.12819642950062574,
      "x": 0,
      "y": -5
    },
    {
      "normalized_weight": -0.14685320297317608,
      "raw_weight": -0.11601403034880914,
      "x": 0,
      "y": -4
    },
    {
      "normalized_weight": -0.11088216894553425,
      "raw_weight": -0.08759691346697208,
      "x": 0,
      "y": -3
    },
    {
      "normalized_weight": -0.09201937422344073,
      "raw_weight": -0.0726953056365182,
      "x": 0,
      "y": -2
    },
    {
      "normalized_weight": -0.05538308559350522,
      "raw_weight": -0.04375263761886914,
      "x": 0,
      "y": -1
    },
    {
      "normalized_weight": 0.039684235263609924,
      "raw_weight": 0.03135054585825185,
      "x": 0,
      "y": 1
    },
    {
      "normalized_weight": 0.061854155799590436,
      "raw_weight": 0.04886478308167646,
      "x": 0,
      "y": 2
    },
    {
      "normalized_weight": 0.08489775124530216,
      "raw_weight": 0.06706922348378873,
      "x": 0,
      "y": 3
    },
    {
      "normalized_weight": 0.08808433102563405,
      "raw_weight": 0.06958662151025093,
      "x": 0,
      "y": 4
    },
    {
      "normalized_weight": 0.11007078679298588,
      "raw_weight": 0.08695592156645887,
      "x": 0,
      "y": 5
    },
    {
      "normalized_weight": 0.11536068413614296,
      "raw_weight": 0.09113494046755297,
      "x": 0,
      "y": 6
    },
    {
      "normalized_weight": 0.09645401485742756,
      "raw_weight": 0.0761986717373678,
      "x": 0,
      "y": 7
    },
    {
      "normalized_weight": 0.10334878467307554,
      "raw_weight": 0.08164553989172971,
      "x": 0,
      "y": 8
    },
    {
      "normalized_weight": 0.2830728119169223,
      "raw_weight": 0.22362752141436867,
      "x": 0,
      "y": 9
    },
    {
      "normalized_weight": 0.14313277230149166,
      "raw_weight": 0.11307489011817845,
      "x": 0,
      "y": 10
    },
    {
      "normalized_weight": 0.2035617487614544,
      "raw_weight": 0.16081378152154902,
      "x": 0,
      "y": 11
    },
    {
      "normalized_weight": 0.12681008922514989,
      "raw_weight": 0.10017997048786845,
      "x": 0,
      "y": 12
    },
    {
      "normalized_weight": 0.1019925861410206,
      "raw_weight": 0.0805741430514063,
      "x": 0,
      "y": 13
    },
    {
      "normalized_weight": 0.07375584139452278,
      "raw_weight": 0.05826711470167301,
      "x": 0,
      "y": 14
    },
    {
      "normalized_weight": 0.07222279696377887,
      "raw_weight": 0.05705600960138532,
      "x": 0,
      "y": 15
    },
    {
      "normalized_weight": -0.3696123783506395,
      "raw_weight": -0.2919937788970053,
      "x": 1,
      "y": -16
    },
    {
      "normalized_weight": -0.3542096610621293,
      "raw_weight": -0.27982563223908224,
      "x": 1,
      "y": -15
    },
    {
      "normalized_weight": -0.32304761001540533,
      "raw_weight": -0.2552076119121703,
      "x": 1,
      "y": -14
    },
    {
      "normalized_weight": -0.3134468134645833,
      "raw_weight": -0.24762298263702087,
      "x": 1,
      "y": -13
    },
    {
      "normalized_weight": -0.296634368897588,
      "raw_weight": -0.2343411514290946,
      "x": 1,
      "y": -12
    },
    {
      "normalized_weight": -0.30744680739884483,
      "raw_weight": -0.2428829778450875,
      "x": 1,
      "y": -11
    },
    {
      "normalized_weight": -0.3019176290158393,
      "raw_weight": -0.2385149269225131,
      "x": 1,
      "y": -10
    },
    {
      "normalized_weight": -0.304143043099253,
      "raw_weight": -0.24027300404840993,
      "x": 1,
      "y": -9
    },
    {
      "normalized_weight": -0.29893818603569833,
      "raw_weight": -0.23616116696820175,
      "x": 1,
      "y": -8
    },
    {
      "normalized_weight": -0.2785369942073526,
      "raw_weight": -0.22004422542380864,
      "x": 1,
      "y": -7
    },
    {
      "normalized_weight": -0.24798035274928426,
      "raw_weight": -0.19590447867193464,
      "x": 1,
      "y": -6
    },
    {
      "normalized_weight": -0.24377469029691773,
      "raw_weight": -0.19258200533456507,
      "x": 1,
      "y": -5
    },
    {
      "normalized_weight": -0.22954864647520057,
      "raw_weight": -0.1813434307154085,
      "x": 1,
      "y": -4
    },
    {
      "normalized_weight": -0.20436628701935408,
      "raw_weight": -0.16144936674528979,
      "x": 1,
      "y": -3
    },
    {
      "normalized_weight": -0.17723014064884676,
      "raw_weight": -0.14001181111258898,
      "x": 1,
      "y": -2
    },
    {
      "normalized_weight": -0.1483236031029244,
      "raw_weight": -0.11717564645131032,
      "x": 1,
      "y": -1
    },
    {
      "normalized_weight": -0.11687703867993507,
      "raw_weight": -0.09233286055714873,
      "x": 1,
      "y": 0
    },
    {
      "normalized_weight": -0.04082969041090802,
      "raw_weight": -0.032255455424617344,
      "x": 1,
      "y": 1
    },
    {
      "normalized_weight": 0.002373960687672792,
      "raw_weight": 0.0018754289432615064,
      "x": 1,
      "y": 2
    },
    {
      "normalized_weight": 0.022773425650953055,
      "raw_weight": 0.01799100626425292,
      "x": 1,
      "y": 3
    },
    {
      "normalized_weight": 0.052608298104329675,
      "raw_weight": 0.04156055550242046,
      "x": 1,
      "y": 4
    },
    {
      "normalized_weight": 0.06203373226910687,
      "raw_weight": 0.049006648492594444,
      "x": 1,
      "y": 5
    },
    {
      "normalized_weight": 0.060164497225492414,
      "raw_weight": 0.04752995280813902,
      "x": 1,
      "y": 6
    },
    {
      "normalized_weight": 0.07146955626732393,
      "raw_weight": 0.056460949451185925,
      "x": 1,
      "y": 7
    },
    {
      "normalized_weight": 0.21195186216976886,
      "raw_weight": 0.16744197111411746,
      "x": 1,
      "y": 8
    },
    {
      "normalized_weight": 0.17726116957313592,
      "raw_weight": 0.14003632396277743,
      "x": 1,
      "y": 9
    },
    {
      "normalized_weight": 0.3645789264771643,
      "raw_weight": 0.2880173519169599,
      "x": 1,
      "y": 10
    },
    {
      "normalized_weight": 0.20085709235992244,
      "raw_weight": 0.1586771029643388,
      "x": 1,
      "y": 11
    },
    {
      "normalized_weight": 0.10732375246257118,
      "raw_weight": 0.08478576444543126,
      "x": 1,
      "y": 12
    },
    {
      "normalized_weight": 0.057070575765134614,
      "raw_weight": 0.04508575485445636,
      "x": 1,
      "y": 13
    },
    {
      "normalized_weight": 0.05590976389713088,
      "raw_weight": 0.044168713478733405,
      "x": 1,
      "y": 14
    },
    {
      "normalized_weight": 0.06252189169460393,
      "raw_weight": 0.04939229443873711,
      "x": 1,
      "y": 15
    },
    {
      "normalized_weight": -0.4206870771816093,
      "raw_weight": -0.33234279097347147,
      "x": 2,
      "y": -16
    },
    {
      "normalized_weight": -0.415275209416332,
      "raw_weight": -0.3280674154389024,
      "x": 2,
      "y": -15
    },
    {
      "normalized_weight": -0.39655256989935406,
      "raw_weight": -0.3132765302204898,
      "x": 2,
      "y": -14
    },
    {
      "normalized_weight": -0.3826155618111257,
      "raw_weight": -0.3022662938307894,
      "x": 2,
      "y": -13
    },
    {
      "normalized_weight": -0.34835170173394164,
      "raw_weight": -0.275197844369814,
      "x": 2,
      "y": -12
    },
    {
      "normalized_weight": -0.35349265415313263,
      "raw_weight": -0.2792591967809749,
      "x": 2,
      "y": -11
    },
    {
      "normalized_weight": -0.35662327808799393,
      "raw_weight": -0.2817323896895153,
      "x": 2,
      "y": -10
    },
    {
      "normalized_weight": -0.34710663006106274,
      "raw_weight": -0.27421423774823966,
      "x": 2,
      "y": -9
    },
    {
      "normalized_weight": -0.3439177034641963,
      "raw_weight": -0.2716949857367152,
      "x": 2,
      "y": -8
    },
    {
      "normalized_weight": -0.3277858874089444,
      "raw_weight": -0.25895085105306614,
      "x": 2,
      "y": -7
    },
    {
      "normalized_weight": -0.31300479206945075,
      "raw_weight": -0.2472737857348662,
      "x": 2,
      "y": -6
    },
    {
      "normalized_weight": -0.27981088984525154,
      "raw_weight": -0.22105060297774878,
      "x": 2,
      "y": -5
    },
    {
      "normalized_weight": -0.27400480219047396,
      "raw_weight": -0.2164637937304745,
      "x": 2,
      "y": -4
    },
    {
      "normalized_weight": -0.25337876053518055,
      "raw_weight": -0.2001692208227927,
      "x": 2,
      "y": -3
    },
    {
      "normalized_weight": -0.23378790209430067,
      "raw_weight": -0.18469244265449758,
      "x": 2,
      "y": -2
    },
    {
      "normalized_weight": -0.19835385048644594,
      "raw_weight": -0.15669954188429233,
      "x": 2,
      "y": -1
    },
    {
      "normalized_weight": -0.18964690453435976,
      "raw_weight": -0.14982105458214426,
      "x": 2,
      "y": 0
    },
    {
      "normalized_weight": -0.11659039817058052,
      "raw_weight": -0.09210641455475864,
      "x": 2,
      "y": 1
    },
    {
      "normalized_weight": -0.05493439372824356,
      "raw_weight": -0.04339817104531243,
      "x": 2,
      "y": 2
    },
    {
      "normalized_weight": -0.02385080153815624,
      "raw_weight": -0.018842133215143435,
      "x": 2,
      "y": 3
    },
    {
      "normalized_weight": 0.014078037926149941,
      "raw_weight": 0.011121649961658457,
      "x": 2,
      "y": 4
    },
    {
      "normalized_weight": 0.03301531285383308,
      "raw_weight": 0.026082097154528142,
      "x": 2,
      "y": 5
    },
    {
      "normalized_weight": 0.03880191487078144,
      "raw_weight": 0.030653512747917347,
      "x": 2,
      "y": 6
    },
    {
      "normalized_weight": 0.05742535054846539,
      "raw_weight": 0.04536602693328767,
      "x": 2,
      "y": 7
    },
    {
      "normalized_weight": 0.107627178902287,
      "raw_weight": 0.08502547133280676,
      "x": 2,
      "y": 8
    },
    {
      "normalized_weight": 0.26051943931888316,
      "raw_weight": 0.20581035706191775,
      "x": 2,
      "y": 9
    },
    {
      "normalized_weight": 0.26608556902204317,
      "raw_weight": 0.21020759952741416,
      "x": 2,
      "y": 10
    },
    {
      "normalized_weight": 0.22659616292619156,
      "raw_weight": 0.1790109687116914,
      "x": 2,
      "y": 11
    },
    {
      "normalized_weight": 0.10329874868382588,
      "raw_weight": 0.08160601146022248,
      "x": 2,
      "y": 12
    },
    {
      "normalized_weight": 0.03539492241683414,
      "raw_weight": 0.027961988709298977,
      "x": 2,
      "y": 13
    },
    {
      "normalized_weight": 0.06334137059791987,
      "raw_weight": 0.050039682772356715,
      "x": 2,
      "y": 14
    },
    {
      "normalized_weight": 0.083410209659206,
      "raw_weight": 0.06589406563077276,
      "x": 2,
      "y": 15
    },
    {
      "normalized_weight": -0.4509627072290241,
      "raw_weight": -0.35626053871092916,
      "x": 3,
      "y": -16
    },
    {
      "normalized_weight": -0.45789685044155126,
      "raw_weight": -0.3617385118488256,
      "x": 3,
      "y": -15
    },
    {
      "normalized_weight": -0.4400155332469877,
      "raw_weight": -0.3476122712651204,
      "x": 3,
      "y": -14
    },
    {
      "normalized_weight": -0.40552325365504027,
      "raw_weight": -0.3203633703874819,
      "x": 3,
      "y": -13
    },
    {
      "normalized_weight": -0.3798041887053843,
      "raw_weight": -0.3000453090772537,
      "x": 3,
      "y": -12
    },
    {
      "normalized_weight": -0.38337178238822245,
      "raw_weight": -0.3028637080866958,
      "x": 3,
      "y": -11
    },
    {
      "normalized_weight": -0.3776342638580973,
      "raw_weight": -0.298331068447897,
      "x": 3,
      "y": -10
    },
    {
      "normalized_weight": -0.3697430693918382,
      "raw_weight": -0.2920970248195523,
      "x": 3,
      "y": -9
    },
    {
      "normalized_weight": -0.36973533432078654,
      "raw_weight": -0.2920909141134215,
      "x": 3,
      "y": -8
    },
    {
      "normalized_weight": -0.3670142460936479,
      "raw_weight": -0.28994125441398194,
      "x": 3,
      "y": -7
    },
    {
      "normalized_weight": -0.34417582795849444,
      "raw_weight": -0.2718989040872107,
      "x": 3,
      "y": -6
    },
    {
      "normalized_weight": -0.3414670023996757,
      "raw_weight": -0.2697589318957439,
      "x": 3,
      "y": -5
    },
    {
      "normalized_weight": -0.33310703206197423,
      "raw_weight": -0.2631545553289597,
      "x": 3,
      "y": -4
    },
    {
      "normalized_weight": -0.30347919370716137,
      "raw_weight": -0.23974856302865755,
      "x": 3,
      "y": -3
    },
    {
      "normalized_weight": -0.2648441639643063,
      "raw_weight": -0.20922688953180205,
      "x": 3,
      "y": -2
    },
    {
      "normalized_weight": -0.26508358901513585,
      "raw_weight": -0.20941603532195738,
      "x": 3,
      "y": -1
    },
    {
      "normalized_weight": -0.24717210227834366,
      "raw_weight": -0.19526596079989156,
      "x": 3,
      "y": 0
    },
    {
      "normalized_weight": -0.19034281506721865,
      "raw_weight": -0.15037082390310277,
      "x": 3,
      "y": 1
    },
    {
      "normalized_weight": -0.12305787106610079,
      "raw_weight": -0.09721571814221966,
      "x": 3,
      "y": 2
    },
    {
      "normalized_weight": -0.08023951679243334,
      "raw_weight": -0.06338921826602235,
      "x": 3,
      "y": 3
    },
    {
      "normalized_weight": -0.024295992326677115,
      "raw_weight": -0.019193833938074927,
      "x": 3,
      "y": 4
    },
    {
      "normalized_weight": -5.177203877613125e-7,
      "raw_weight": -4.0899910633143696e-7,
      "x": 3,
      "y": 5
    },
    {
      "normalized_weight": 0.011868493098018768,
      "raw_weight": 0.009376109547434829,
      "x": 3,
      "y": 6
    },
    {
      "normalized_weight": 0.02633864748051906,
      "raw_weight": 0.020807531509610063,
      "x": 3,
      "y": 7
    },
    {
      "normalized_weight": 0.15417220827743727,
      "raw_weight": 0.12179604453917547,
      "x": 3,
      "y": 8
    },
    {
      "normalized_weight": 0.23905000354581876,
      "raw_weight": 0.1888495028011969,
      "x": 3,
      "y": 9
    },
    {
      "normalized_weight": 0.20565253122567367,
      "raw_weight": 0.16246549966828225,
      "x": 3,
      "y": 10
    },
    {
      "normalized_weight": 0.2152652449631222,
      "raw_weight": 0.17005954352086658,
      "x": 3,
      "y": 11
    },
    {
      "normalized_weight": 0.15709970222424108,
      "raw_weight": 0.12410876475715049,
      "x": 3,
      "y": 12
    },
    {
      "normalized_weight": 0.059176486938792634,
      "raw_weight": 0.046749424681646196,
      "x": 3,
      "y": 13
    },
    {
      "normalized_weight": 0.08511149055003218,
      "raw_weight": 0.06723807753452545,
      "x": 3,
      "y": 14
    },
    {
      "normalized_weight": 0.11425700996085546,
      "raw_weight": 0.09026303786907584,
      "x": 3,
      "y": 15
    },
    {
      "normalized_weight": -0.46770879805416504,
      "raw_weight": -0.3694899504627905,
      "x": 4,
      "y": -16
    },
    {
      "normalized_weight": -0.46955537099160083,
      "raw_weight": -0.3709487430833648,
      "x": 4,
      "y": -15
    },
    {
      "normalized_weight": -0.45257588504103313,
      "raw_weight": -0.3575349491824163,
      "x": 4,
      "y": -14
    },
    {
      "normalized_weight": -0.44992515729909227,
      "raw_weight": -0.355440874266283,
      "x": 4,
      "y": -13
    },
    {
      "normalized_weight": -0.43496062765835486,
      "raw_weight": -0.34361889585010047,
      "x": 4,
      "y": -12
    },
    {
      "normalized_weight": -0.39744837302046004,
      "raw_weight": -0.31398421468616355,
      "x": 4,
      "y": -11
    },
    {
      "normalized_weight": -0.3846435251448407,
      "raw_weight": -0.30386838486442425,
      "x": 4,
      "y": -10
    },
    {
      "normalized_weight": -0.3762673459034579,
      "raw_weight": -0.29725120326373183,
      "x": 4,
      "y": -9
    },
    {
      "normalized_weight": -0.38995084036531935,
      "raw_weight": -0.3080611638886024,
      "x": 4,
      "y": -8
    },
    {
      "normalized_weight": -0.3909700454637087,
      "raw_weight": -0.30886633591633,
      "x": 4,
      "y": -7
    },
    {
      "normalized_weight": -0.36499870424717906,
      "raw_weight": -0.28834897635527157,
      "x": 4,
      "y": -6
    },
    {
      "normalized_weight": -0.3592740711804765,
      "raw_weight": -0.28382651623257654,
      "x": 4,
      "y": -5
    },
    {
      "normalized_weight": -0.3426904139959647,
      "raw_weight": -0.27072542705681224,
      "x": 4,
      "y": -4
    },
    {
      "normalized_weight": -0.3205130381171078,
      "raw_weight": -0.25320530011251524,
      "x": 4,
      "y": -3
    },
    {
      "normalized_weight": -0.2889144370441093,
      "raw_weight": -0.22824240526484643,
      "x": 4,
      "y": -2
    },
    {
      "normalized_weight": -0.3052501595674086,
      "raw_weight": -0.24114762605825285,
      "x": 4,
      "y": -1
    },
    {
      "normalized_weight": -0.2891970322927665,
      "raw_weight": -0.22846565551128561,
      "x": 4,
      "y": 0
    },
    {
      "normalized_weight": -0.22856436603894323,
      "raw_weight": -0.1805658491707652,
      "x": 4,
      "y": 1
    },
    {
      "normalized_weight": -0.16125604755001235,
      "raw_weight": -0.1273922775645098,
      "x": 4,
      "y": 2
    },
    {
      "normalized_weight": -0.10865302442988908,
      "raw_weight": -0.0858358892996124,
      "x": 4,
      "y": 3
    },
    {
      "normalized_weight": -0.05797282951442962,
      "raw_weight": -0.045798535316399415,
      "x": 4,
      "y": 4
    },
    {
      "normalized_weight": -0.026090562780004798,
      "raw_weight": -0.020611544596203797,
      "x": 4,
      "y": 5
    },
    {
      "normalized_weight": -0.012312651311696813,
      "raw_weight": -0.009726994536240485,
      "x": 4,
      "y": 6
    },
    {
      "normalized_weight": -0.019275416695320634,
      "raw_weight": -0.015227579189303307,
      "x": 4,
      "y": 7
    },
    {
      "normalized_weight": 0.09799696603953348,
      "raw_weight": 0.07741760317123147,
      "x": 4,
      "y": 8
    },
    {
      "normalized_weight": 0.2724458859660966,
      "raw_weight": 0.21523224991321638,
      "x": 4,
      "y": 9
    },
    {
      "normalized_weight": 0.29478040073863127,
      "raw_weight": 0.23287651658351877,
      "x": 4,
      "y": 10
    },
    {
      "normalized_weight": 0.17279991992483826,
      "raw_weight": 0.13651193674062226,
      "x": 4,
      "y": 11
    },
    {
      "normalized_weight": 0.16122821305624996,
      "raw_weight": 0.1273702883144375,
      "x": 4,
      "y": 12
    },
    {
      "normalized_weight": 0.05548894988859887,
      "raw_weight": 0.043836270411993124,
      "x": 4,
      "y": 13
    },
    {
      "normalized_weight": 0.0817807708512168,
      "raw_weight": 0.0646068089724613,
      "x": 4,
      "y": 14
    },
    {
      "normalized_weight": 0.09777836294203578,
      "raw_weight": 0.07724490672420829,
      "x": 4,
      "y": 15
    },
    {
      "normalized_weight": -0.45450788332582925,
      "raw_weight": -0.35906122782740524,
      "x": 5,
      "y": -16
    },
    {
      "normalized_weight": -0.4815877056163993,
      "raw_weight": -0.3804542874369556,
      "x": 5,
      "y": -15
    },
    {
      "normalized_weight": -0.47136455592974963,
      "raw_weight": -0.3723779991845023,
      "x": 5,
      "y": -14
    },
    {
      "normalized_weight": -0.473242926818232,
      "raw_weight": -0.3738619121864034,
      "x": 5,
      "y": -13
    },
    {
      "normalized_weight": -0.4617780744119853,
      "raw_weight": -0.3648046787854685,
      "x": 5,
      "y": -12
    },
    {
      "normalized_weight": -0.41899615775071086,
      "raw_weight": -0.3310069646230617,
      "x": 5,
      "y": -11
    },
    {
      "normalized_weight": -0.4180231592154631,
      "raw_weight": -0.33023829578021596,
      "x": 5,
      "y": -10
    },
    {
      "normalized_weight": -0.41955915542653854,
      "raw_weight": -0.33145173278696555,
      "x": 5,
      "y": -9
    },
    {
      "normalized_weight": -0.42938320301221516,
      "raw_weight": -0.3392127303796501,
      "x": 5,
      "y": -8
    },
    {
      "normalized_weight": -0.42653797515987435,
      "raw_weight": -0.33696500037630084,
      "x": 5,
      "y": -7
    },
    {
      "normalized_weight": -0.4032490423697978,
      "raw_weight": -0.31856674347214037,
      "x": 5,
      "y": -6
    },
    {
      "normalized_weight": -0.35597936473248504,
      "raw_weight": -0.28122369813866327,
      "x": 5,
      "y": -5
    },
    {
      "normalized_weight": -0.33710556903316835,
      "raw_weight": -0.2663133995362031,
      "x": 5,
      "y": -4
    },
    {
      "normalized_weight": -0.34122511186771337,
      "raw_weight": -0.26956783837549364,
      "x": 5,
      "y": -3
    },
    {
      "normalized_weight": -0.3233827728010888,
      "raw_weight": -0.25547239051286025,
      "x": 5,
      "y": -2
    },
    {
      "normalized_weight": -0.3568862534719723,
      "raw_weight": -0.2819401402428582,
      "x": 5,
      "y": -1
    },
    {
      "normalized_weight": -0.32864970325258763,
      "raw_weight": -0.2596332655695443,
      "x": 5,
      "y": 0
    },
    {
      "normalized_weight": -0.2689453072925452,
      "raw_weight": -0.21246679276111075,
      "x": 5,
      "y": 1
    },
    {
      "normalized_weight": -0.21995053979183463,
      "raw_weight": -0.1737609264355494,
      "x": 5,
      "y": 2
    },
    {
      "normalized_weight": -0.14655367378444606,
      "raw_weight": -0.11577740228971242,
      "x": 5,
      "y": 3
    },
    {
      "normalized_weight": -0.09604222505459502,
      "raw_weight": -0.07587335779313009,
      "x": 5,
      "y": 4
    },
    {
      "normalized_weight": -0.06554380544050559,
      "raw_weight": -0.05177960629799943,
      "x": 5,
      "y": 5
    },
    {
      "normalized_weight": -0.05537040487367425,
      "raw_weight": -0.04374261985020267,
      "x": 5,
      "y": 6
    },
    {
      "normalized_weight": -0.036415144572982464,
      "raw_weight": -0.028767964212656157,
      "x": 5,
      "y": 7
    },
    {
      "normalized_weight": 0.15752978315624666,
      "raw_weight": 0.1244485286934349,
      "x": 5,
      "y": 8
    },
    {
      "normalized_weight": 0.10507172635226673,
      "raw_weight": 0.08300666381829075,
      "x": 5,
      "y": 9
    },
    {
      "normalized_weight": 0.15907414655410002,
      "raw_weight": 0.12566857577773904,
      "x": 5,
      "y": 10
    },
    {
      "normalized_weight": 0.15096030306262873,
      "raw_weight": 0.11925863941947673,
      "x": 5,
      "y": 11
    },
    {
      "normalized_weight": 0.15643827186874862,
      "raw_weight": 0.12358623477631145,
      "x": 5,
      "y": 12
    },
    {
      "normalized_weight": 0.06898596662719346,
      "raw_weight": 0.05449891363548285,
      "x": 5,
      "y": 13
    },
    {
      "normalized_weight": 0.06853102286360947,
      "raw_weight": 0.0541395080622515,
      "x": 5,
      "y": 14
    },
    {
      "normalized_weight": 0.08005358588268768,
      "raw_weight": 0.0632423328473233,
      "x": 5,
      "y": 15
    },
    {
      "normalized_weight": -0.47952186019346377,
      "raw_weight": -0.3788222695528365,
      "x": 6,
      "y": -16
    },
    {
      "normalized_weight": -0.502991506074487,
      "raw_weight": -0.39736328979884483,
      "x": 6,
      "y": -15
    },
    {
      "normalized_weight": -0.48857237038205276,
      "raw_weight": -0.3859721726018218,
      "x": 6,
      "y": -14
    },
    {
      "normalized_weight": -0.4783678339415504,
      "raw_weight": -0.37791058881382494,
      "x": 6,
      "y": -13
    },
    {
      "normalized_weight": -0.4565435005912475,
      "raw_weight": -0.3606693654670856,
      "x": 6,
      "y": -12
    },
    {
      "normalized_weight": -0.4481304238043367,
      "raw_weight": -0.35402303480542613,
      "x": 6,
      "y": -11
    },
    {
      "normalized_weight": -0.46675230645081156,
      "raw_weight": -0.36873432209614126,
      "x": 6,
      "y": -10
    },
    {
      "normalized_weight": -0.4714410570014242,
      "raw_weight": -0.3724384350311252,
      "x": 6,
      "y": -9
    },
    {
      "normalized_weight": -0.46449709478274814,
      "raw_weight": -0.36695270487837117,
      "x": 6,
      "y": -8
    },
    {
      "normalized_weight": -0.46428411054584845,
      "raw_weight": -0.3667844473312204,
      "x": 6,
      "y": -7
    },
    {
      "normalized_weight": -0.4215940893288237,
      "raw_weight": -0.33305933056977083,
      "x": 6,
      "y": -6
    },
    {
      "normalized_weight": -0.36528177481665813,
      "raw_weight": -0.28857260210516,
      "x": 6,
      "y": -5
    },
    {
      "normalized_weight": -0.3612933326797172,
      "raw_weight": -0.2854217328169767,
      "x": 6,
      "y": -4
    },
    {
      "normalized_weight": -0.3746622799865092,
      "raw_weight": -0.29598320118934235,
      "x": 6,
      "y": -3
    },
    {
      "normalized_weight": -0.37801438014122385,
      "raw_weight": -0.29863136031156695,
      "x": 6,
      "y": -2
    },
    {
      "normalized_weight": -0.3774957268998399,
      "raw_weight": -0.2982216242508736,
      "x": 6,
      "y": -1
    },
    {
      "normalized_weight": -0.36041241106138505,
      "raw_weight": -0.2847258047384943,
      "x": 6,
      "y": 0
    },
    {
      "normalized_weight": -0.3202120993101816,
      "raw_weight": -0.25296755845504354,
      "x": 6,
      "y": 1
    },
    {
      "normalized_weight": -0.264480059884564,
      "raw_weight": -0.20893924730880564,
      "x": 6,
      "y": 2
    },
    {
      "normalized_weight": -0.1904414733982403,
      "raw_weight": -0.15044876398460988,
      "x": 6,
      "y": 3
    },
    {
      "normalized_weight": -0.14871207347135457,
      "raw_weight": -0.11748253804237015,
      "x": 6,
      "y": 4
    },
    {
      "normalized_weight": -0.11371289975584109,
      "raw_weight": -0.0898331908071145,
      "x": 6,
      "y": 5
    },
    {
      "normalized_weight": -0.08210407774655396,
      "raw_weight": -0.06486222141977764,
      "x": 6,
      "y": 6
    },
    {
      "normalized_weight": -0.04156477023322607,
      "raw_weight": -0.032836168484248605,
      "x": 6,
      "y": 7
    },
    {
      "normalized_weight": 0.010392359353522791,
      "raw_weight": 0.008209963889283007,
      "x": 6,
      "y": 8
    },
    {
      "normalized_weight": 0.0265281002865025,
      "raw_weight": 0.020957199226336983,
      "x": 6,
      "y": 9
    },
    {
      "normalized_weight": 0.042504087771059046,
      "raw_weight": 0.03357822933913666,
      "x": 6,
      "y": 10
    },
    {
      "normalized_weight": 0.05369474957746506,
      "raw_weight": 0.04241885216619741,
      "x": 6,
      "y": 11
    },
    {
      "normalized_weight": 0.046547548896150835,
      "raw_weight": 0.03677256362795917,
      "x": 6,
      "y": 12
    },
    {
      "normalized_weight": 0.05058378401824079,
      "raw_weight": 0.03996118937441024,
      "x": 6,
      "y": 13
    },
    {
      "normalized_weight": 0.05884477923346499,
      "raw_weight": 0.04648737559443736,
      "x": 6,
      "y": 14
    },
    {
      "normalized_weight": 0.09001524444711,
      "raw_weight": 0.07111204311321692,
      "x": 6,
      "y": 15
    },
    {
      "normalized_weight": -0.49627930993776265,
      "raw_weight": -0.39206065485083263,
      "x": 7,
      "y": -16
    },
    {
      "normalized_weight": -0.5007830278906822,
      "raw_weight": -0.3956185920336391,
      "x": 7,
      "y": -15
    },
    {
      "normalized_weight": -0.49894306818276124,
      "raw_weight": -0.3941650238643815,
      "x": 7,
      "y": -14
    },
    {
      "normalized_weight": -0.4842198435248269,
      "raw_weight": -0.3825336763846134,
      "x": 7,
      "y": -13
    },
    {
      "normalized_weight": -0.45668200548424215,
      "raw_weight": -0.3607787843325514,
      "x": 7,
      "y": -12
    },
    {
      "normalized_weight": -0.44789150965421326,
      "raw_weight": -0.3538342926268286,
      "x": 7,
      "y": -11
    },
    {
      "normalized_weight": -0.4670173974581677,
      "raw_weight": -0.3689437439919526,
      "x": 7,
      "y": -10
    },
    {
      "normalized_weight": -0.48661728516198377,
      "raw_weight": -0.3844276552779673,
      "x": 7,
      "y": -9
    },
    {
      "normalized_weight": -0.4683334276015715,
      "raw_weight": -0.3699834078052416,
      "x": 7,
      "y": -8
    },
    {
      "normalized_weight": -0.45302838566671977,
      "raw_weight": -0.35789242467670873,
      "x": 7,
      "y": -7
    },
    {
      "normalized_weight": -0.42643658048824007,
      "raw_weight": -0.33688489858570975,
      "x": 7,
      "y": -6
    },
    {
      "normalized_weight": -0.376068292864606,
      "raw_weight": -0.29709395136303884,
      "x": 7,
      "y": -5
    },
    {
      "normalized_weight": -0.35314923621347405,
      "raw_weight": -0.2789878966086446,
      "x": 7,
      "y": -4
    },
    {
      "normalized_weight": -0.36616030965688506,
      "raw_weight": -0.2892666446289393,
      "x": 7,
      "y": -3
    },
    {
      "normalized_weight": -0.3974733678834355,
      "raw_weight": -0.31400396062791414,
      "x": 7,
      "y": -2
    },
    {
      "normalized_weight": -0.4010748162695973,
      "raw_weight": -0.31684910485298196,
      "x": 7,
      "y": -1
    },
    {
      "normalized_weight": -0.3702374217267095,
      "raw_weight": -0.2924875631641006,
      "x": 7,
      "y": 0
    },
    {
      "normalized_weight": -0.3420342429595144,
      "raw_weight": -0.2702070519380165,
      "x": 7,
      "y": 1
    },
    {
      "normalized_weight": -0.2775207562656712,
      "raw_weight": -0.2192413974498803,
      "x": 7,
      "y": 2
    },
    {
      "normalized_weight": -0.21894278997539335,
      "raw_weight": -0.1729648040805608,
      "x": 7,
      "y": 3
    },
    {
      "normalized_weight": -0.1769001362446403,
      "raw_weight": -0.13975110763326587,
      "x": 7,
      "y": 4
    },
    {
      "normalized_weight": -0.14114623113664965,
      "raw_weight": -0.11150552259795327,
      "x": 7,
      "y": 5
    },
    {
      "normalized_weight": -0.10618501090876141,
      "raw_weight": -0.08388615861792154,
      "x": 7,
      "y": 6
    },
    {
      "normalized_weight": -0.041537320735048074,
      "raw_weight": -0.03281448338068799,
      "x": 7,
      "y": 7
    },
    {
      "normalized_weight": -0.001981604260259907,
      "raw_weight": -0.001565467365605327,
      "x": 7,
      "y": 8
    },
    {
      "normalized_weight": 0.03521550444276005,
      "raw_weight": 0.027820248509780453,
      "x": 7,
      "y": 9
    },
    {
      "normalized_weight": 0.05102746418777351,
      "raw_weight": 0.04031169670834108,
      "x": 7,
      "y": 10
    },
    {
      "normalized_weight": 0.05298106150801867,
      "raw_weight": 0.04185503859133476,
      "x": 7,
      "y": 11
    },
    {
      "normalized_weight": 0.044396030782991994,
      "raw_weight": 0.035072864318563685,
      "x": 7,
      "y": 12
    },
    {
      "normalized_weight": 0.01924032585355933,
      "raw_weight": 0.015199857424311874,
      "x": 7,
      "y": 13
    },
    {
      "normalized_weight": 0.018901530387760348,
      "raw_weight": 0.01493220900633068,
      "x": 7,
      "y": 14
    },
    {
      "normalized_weight": 0.06424882612412462,
      "raw_weight": 0.05075657263805847,
      "x": 7,
      "y": 15
    },
    {
      "normalized_weight": -0.47977303939569493,
      "raw_weight": -0.3790207011225991,
      "x": 8,
      "y": -16
    },
    {
      "normalized_weight": -0.5087737486220123,
      "raw_weight": -0.40193126141138985,
      "x": 8,
      "y": -15
    },
    {
      "normalized_weight": -0.4943558795088304,
      "raw_weight": -0.39054114481197616,
      "x": 8,
      "y": -14
    },
    {
      "normalized_weight": -0.4780218368342321,
      "raw_weight": -0.3776372510990435,
      "x": 8,
      "y": -13
    },
    {
      "normalized_weight": -0.45706347382636625,
      "raw_weight": -0.3610801443228295,
      "x": 8,
      "y": -12
    },
    {
      "normalized_weight": -0.44366512022520965,
      "raw_weight": -0.35049544497791574,
      "x": 8,
      "y": -11
    },
    {
      "normalized_weight": -0.4596997636868489,
      "raw_weight": -0.36316281331261074,
      "x": 8,
      "y": -10
    },
    {
      "normalized_weight": -0.4707396481559796,
      "raw_weight": -0.37188432204322397,
      "x": 8,
      "y": -9
    },
    {
      "normalized_weight": -0.44169536126078734,
      "raw_weight": -0.3489393353960221,
      "x": 8,
      "y": -8
    },
    {
      "normalized_weight": -0.4178774504369967,
      "raw_weight": -0.3301231858452275,
      "x": 8,
      "y": -7
    },
    {
      "normalized_weight": -0.4143675493426765,
      "raw_weight": -0.32735036398071454,
      "x": 8,
      "y": -6
    },
    {
      "normalized_weight": -0.37825357850424285,
      "raw_weight": -0.29882032701835193,
      "x": 8,
      "y": -5
    },
    {
      "normalized_weight": -0.36651750890504586,
      "raw_weight": -0.2895488320349863,
      "x": 8,
      "y": -4
    },
    {
      "normalized_weight": -0.3763948088504167,
      "raw_weight": -0.2973518989918293,
      "x": 8,
      "y": -3
    },
    {
      "normalized_weight": -0.41548597964826944,
      "raw_weight": -0.32823392392213296,
      "x": 8,
      "y": -2
    },
    {
      "normalized_weight": -0.44092443666912023,
      "raw_weight": -0.3483303049686051,
      "x": 8,
      "y": -1
    },
    {
      "normalized_weight": -0.4031082225054649,
      "raw_weight": -0.31845549577931737,
      "x": 8,
      "y": 0
    },
    {
      "normalized_weight": -0.34683843343972837,
      "raw_weight": -0.2740023624173855,
      "x": 8,
      "y": 1
    },
    {
      "normalized_weight": -0.29909150793902967,
      "raw_weight": -0.23628229127183353,
      "x": 8,
      "y": 2
    },
    {
      "normalized_weight": -0.2385023787151879,
      "raw_weight": -0.1884168791849985,
      "x": 8,
      "y": 3
    },
    {
      "normalized_weight": -0.1837134386872824,
      "raw_weight": -0.14513361656295315,
      "x": 8,
      "y": 4
    },
    {
      "normalized_weight": -0.13375956739559733,
      "raw_weight": -0.10567005824252192,
      "x": 8,
      "y": 5
    },
    {
      "normalized_weight": -0.09652571635312175,
      "raw_weight": -0.07625531591896621,
      "x": 8,
      "y": 6
    },
    {
      "normalized_weight": -0.054028451331398386,
      "raw_weight": -0.04268247655180474,
      "x": 8,
      "y": 7
    },
    {
      "normalized_weight": -0.012629691714108457,
      "raw_weight": -0.009977456454145684,
      "x": 8,
      "y": 8
    },
    {
      "normalized_weight": 0.008187138469064707,
      "raw_weight": 0.006467839390561121,
      "x": 8,
      "y": 9
    },
    {
      "normalized_weight": 0.03022599521037191,
      "raw_weight": 0.023878536216193815,
      "x": 8,
      "y": 10
    },
    {
      "normalized_weight": 0.043710125989201674,
      "raw_weight": 0.034530999531469334,
      "x": 8,
      "y": 11
    },
    {
      "normalized_weight": 0.040131401475176846,
      "raw_weight": 0.031703807165389716,
      "x": 8,
      "y": 12
    },
    {
      "normalized_weight": 0.009128710225386982,
      "raw_weight": 0.007211681078055718,
      "x": 8,
      "y": 13
    },
    {
      "normalized_weight": 0.007670948581169599,
      "raw_weight": 0.006060049379123985,
      "x": 8,
      "y": 14
    },
    {
      "normalized_weight": 0.043801948514990065,
      "raw_weight": 0.03460353932684216,
      "x": 8,
      "y": 15
    },
    {
      "normalized_weight": -0.4911159762382096,
      "raw_weight": -0.3879816212281857,
      "x": 9,
      "y": -16
    },
    {
      "normalized_weight": -0.5181378946224645,
      "raw_weight": -0.40932893675174714,
      "x": 9,
      "y": -15
    },
    {
      "normalized_weight": -0.5091884517112115,
      "raw_weight": -0.40225887685185724,
      "x": 9,
      "y": -14
    },
    {
      "normalized_weight": -0.4944465100311713,
      "raw_weight": -0.39061274292462544,
      "x": 9,
      "y": -13
    },
    {
      "normalized_weight": -0.47879825673100507,
      "raw_weight": -0.3782506228174941,
      "x": 9,
      "y": -12
    },
    {
      "normalized_weight": -0.45479226157686536,
      "raw_weight": -0.35928588664572375,
      "x": 9,
      "y": -11
    },
    {
      "normalized_weight": -0.4376616352958381,
      "raw_weight": -0.3457526918837122,
      "x": 9,
      "y": -10
    },
    {
      "normalized_weight": -0.43214813919580247,
      "raw_weight": -0.3413970299646841,
      "x": 9,
      "y": -9
    },
    {
      "normalized_weight": -0.40868199936020944,
      "raw_weight": -0.32285877949456554,
      "x": 9,
      "y": -8
    },
    {
      "normalized_weight": -0.41538863968280737,
      "raw_weight": -0.32815702534941793,
      "x": 9,
      "y": -7
    },
    {
      "normalized_weight": -0.40557200510001884,
      "raw_weight": -0.320401884029015,
      "x": 9,
      "y": -6
    },
    {
      "normalized_weight": -0.3979122064759512,
      "raw_weight": -0.3143506431160016,
      "x": 9,
      "y": -5
    },
    {
      "normalized_weight": -0.37973242018897047,
      "raw_weight": -0.2999886119492868,
      "x": 9,
      "y": -4
    },
    {
      "normalized_weight": -0.3865544617055202,
      "raw_weight": -0.3053780247473611,
      "x": 9,
      "y": -3
    },
    {
      "normalized_weight": -0.43545210629130243,
      "raw_weight": -0.34400716397012904,
      "x": 9,
      "y": -2
    },
    {
      "normalized_weight": -0.444838256630638,
      "raw_weight": -0.3514222227382041,
      "x": 9,
      "y": -1
    },
    {
      "normalized_weight": -0.42370904877555154,
      "raw_weight": -0.33473014853268585,
      "x": 9,
      "y": 0
    },
    {
      "normalized_weight": -0.37658046937368284,
      "raw_weight": -0.29749857080520953,
      "x": 9,
      "y": 1
    },
    {
      "normalized_weight": -0.3199584316140116,
      "raw_weight": -0.25276716097506924,
      "x": 9,
      "y": 2
    },
    {
      "normalized_weight": -0.28263291099001225,
      "raw_weight": -0.22327999968210974,
      "x": 9,
      "y": 3
    },
    {
      "normalized_weight": -0.22509188921958076,
      "raw_weight": -0.17782259248346885,
      "x": 9,
      "y": 4
    },
    {
      "normalized_weight": -0.16499250954091288,
      "raw_weight": -0.13034408253732122,
      "x": 9,
      "y": 5
    },
    {
      "normalized_weight": -0.09339311694834779,
      "raw_weight": -0.07378056238919478,
      "x": 9,
      "y": 6
    },
    {
      "normalized_weight": -0.03135939132186208,
      "raw_weight": -0.02477391914427105,
      "x": 9,
      "y": 7
    },
    {
      "normalized_weight": -0.013621657791318664,
      "raw_weight": -0.010761109655141748,
      "x": 9,
      "y": 8
    },
    {
      "normalized_weight": -0.008826476977925716,
      "raw_weight": -0.006972916812561318,
      "x": 9,
      "y": 9
    },
    {
      "normalized_weight": 0.00041561082211109216,
      "raw_weight": 0.00032833254946776293,
      "x": 9,
      "y": 10
    },
    {
      "normalized_weight": 0.015801688174327585,
      "raw_weight": 0.012483333657718797,
      "x": 9,
      "y": 11
    },
    {
      "normalized_weight": 0.012923714976216139,
      "raw_weight": 0.010209734831210753,
      "x": 9,
      "y": 12
    },
    {
      "normalized_weight": -0.009759401587502303,
      "raw_weight": -0.007709927254126821,
      "x": 9,
      "y": 13
    },
    {
      "normalized_weight": -0.00438130721523694,
      "raw_weight": -0.003461232700037184,
      "x": 9,
      "y": 14
    },
    {
      "normalized_weight": 0.06389812224165894,
      "raw_weight": 0.050479516570910585,
      "x": 9,
      "y": 15
    },
    {
      "normalized_weight": -0.5205089787973035,
      "raw_weight": -0.4112020932498699,
      "x": 10,
      "y": -16
    },
    {
      "normalized_weight": -0.5480222747475216,
      "raw_weight": -0.43293759705054224,
      "x": 10,
      "y": -15
    },
    {
      "normalized_weight": -0.5274166353655528,
      "raw_weight": -0.41665914193878684,
      "x": 10,
      "y": -14
    },
    {
      "normalized_weight": -0.5127563052007114,
      "raw_weight": -0.40507748110856207,
      "x": 10,
      "y": -13
    },
    {
      "normalized_weight": -0.49185101417256516,
      "raw_weight": -0.3885623011963266,
      "x": 10,
      "y": -12
    },
    {
      "normalized_weight": -0.44654034214169736,
      "raw_weight": -0.35276687029194104,
      "x": 10,
      "y": -11
    },
    {
      "normalized_weight": -0.4126388081913131,
      "raw_weight": -0.32598465847113745,
      "x": 10,
      "y": -10
    },
    {
      "normalized_weight": -0.3875957272212766,
      "raw_weight": -0.3062006245048086,
      "x": 10,
      "y": -9
    },
    {
      "normalized_weight": -0.3893615657808898,
      "raw_weight": -0.30759563696690306,
      "x": 10,
      "y": -8
    },
    {
      "normalized_weight": -0.4073710168032482,
      "raw_weight": -0.3218231032745662,
      "x": 10,
      "y": -7
    },
    {
      "normalized_weight": -0.413043226951029,
      "raw_weight": -0.326304149291313,
      "x": 10,
      "y": -6
    },
    {
      "normalized_weight": -0.40098290923041363,
      "raw_weight": -0.31677649829202686,
      "x": 10,
      "y": -5
    },
    {
      "normalized_weight": -0.39325230410475615,
      "raw_weight": -0.31066932024275745,
      "x": 10,
      "y": -4
    },
    {
      "normalized_weight": -0.4331483174879173,
      "raw_weight": -0.3421871708154548,
      "x": 10,
      "y": -3
    },
    {
      "normalized_weight": -0.4764895604259314,
      "raw_weight": -0.3764267527364859,
      "x": 10,
      "y": -2
    },
    {
      "normalized_weight": -0.46874214169356804,
      "raw_weight": -0.37030629193791886,
      "x": 10,
      "y": -1
    },
    {
      "normalized_weight": -0.43775332302262665,
      "raw_weight": -0.34582512518787517,
      "x": 10,
      "y": 0
    },
    {
      "normalized_weight": -0.39663157588362613,
      "raw_weight": -0.31333894494806475,
      "x": 10,
      "y": 1
    },
    {
      "normalized_weight": -0.33614320249041196,
      "raw_weight": -0.2655531299674255,
      "x": 10,
      "y": 2
    },
    {
      "normalized_weight": -0.29952400029825005,
      "raw_weight": -0.2366239602356176,
      "x": 10,
      "y": 3
    },
    {
      "normalized_weight": -0.25732563035381895,
      "raw_weight": -0.20328724797951706,
      "x": 10,
      "y": 4
    },
    {
      "normalized_weight": -0.19203486725159732,
      "raw_weight": -0.15170754512876194,
      "x": 10,
      "y": 5
    },
    {
      "normalized_weight": -0.12863581106599095,
      "raw_weight": -0.10162229074213289,
      "x": 10,
      "y": 6
    },
    {
      "normalized_weight": -0.07200876172315512,
      "raw_weight": -0.05688692176129257,
      "x": 10,
      "y": 7
    },
    {
      "normalized_weight": -0.046916552005344246,
      "raw_weight": -0.037064076084221964,
      "x": 10,
      "y": 8
    },
    {
      "normalized_weight": -0.02768554909403464,
      "raw_weight": -0.021871583784287375,
      "x": 10,
      "y": 9
    },
    {
      "normalized_weight": -0.005140269421084571,
      "raw_weight": -0.004060812842656813,
      "x": 10,
      "y": 10
    },
    {
      "normalized_weight": -0.017990730163909133,
      "raw_weight": -0.01421267682948822,
      "x": 10,
      "y": 11
    },
    {
      "normalized_weight": -0.004249922351373143,
      "raw_weight": -0.0033574386575847843,
      "x": 10,
      "y": 12
    },
    {
      "normalized_weight": 0.011055314061244305,
      "raw_weight": 0.008733698108383004,
      "x": 10,
      "y": 13
    },
    {
      "normalized_weight": 0.012968835877878369,
      "raw_weight": 0.010245380343523914,
      "x": 10,
      "y": 14
    },
    {
      "normalized_weight": 0.06923467621265109,
      "raw_weight": 0.05469539420799437,
      "x": 10,
      "y": 15
    },
    {
      "normalized_weight": -0.549342976026594,
      "raw_weight": -0.4339809510610094,
      "x": 11,
      "y": -16
    },
    {
      "normalized_weight": -0.555686769272986,
      "raw_weight": -0.43899254772565904,
      "x": 11,
      "y": -15
    },
    {
      "normalized_weight": -0.5730979041556568,
      "raw_weight": -0.452747344282969,
      "x": 11,
      "y": -14
    },
    {
      "normalized_weight": -0.5267651076780677,
      "raw_weight": -0.41614443506567367,
      "x": 11,
      "y": -13
    },
    {
      "normalized_weight": -0.499052726030988,
      "raw_weight": -0.39425165356448066,
      "x": 11,
      "y": -12
    },
    {
      "normalized_weight": -0.4470486131899519,
      "raw_weight": -0.35316840442006214,
      "x": 11,
      "y": -11
    },
    {
      "normalized_weight": -0.3896089644966893,
      "raw_weight": -0.30779108195238464,
      "x": 11,
      "y": -10
    },
    {
      "normalized_weight": -0.363805302595475,
      "raw_weight": -0.28740618905042536,
      "x": 11,
      "y": -9
    },
    {
      "normalized_weight": -0.3817707840152625,
      "raw_weight": -0.30159891937205746,
      "x": 11,
      "y": -8
    },
    {
      "normalized_weight": -0.4205295186196868,
      "raw_weight": -0.3322183197095527,
      "x": 11,
      "y": -7
    },
    {
      "normalized_weight": -0.41939697679114185,
      "raw_weight": -0.3313236116650022,
      "x": 11,
      "y": -6
    },
    {
      "normalized_weight": -0.40286589292353114,
      "raw_weight": -0.3182640554095897,
      "x": 11,
      "y": -5
    },
    {
      "normalized_weight": -0.4177364730650216,
      "raw_weight": -0.3300118137213672,
      "x": 11,
      "y": -4
    },
    {
      "normalized_weight": -0.44900771247152743,
      "raw_weight": -0.35471609285250677,
      "x": 11,
      "y": -3
    },
    {
      "normalized_weight": -0.48005409236184843,
      "raw_weight": -0.37924273296586036,
      "x": 11,
      "y": -2
    },
    {
      "normalized_weight": -0.48823866265733185,
      "raw_weight": -0.3857085434992923,
      "x": 11,
      "y": -1
    },
    {
      "normalized_weight": -0.46055348904738885,
      "raw_weight": -0.3638372563474373,
      "x": 11,
      "y": 0
    },
    {
      "normalized_weight": -0.433678025688269,
      "raw_weight": -0.34260564029373264,
      "x": 11,
      "y": 1
    },
    {
      "normalized_weight": -0.36952730820717056,
      "raw_weight": -0.29192657348366485,
      "x": 11,
      "y": 2
    },
    {
      "normalized_weight": -0.32998642104997683,
      "raw_weight": -0.26068927262948177,
      "x": 11,
      "y": 3
    },
    {
      "normalized_weight": -0.28965545966504236,
      "raw_weight": -0.22882781313538356,
      "x": 11,
      "y": 4
    },
    {
      "normalized_weight": -0.22461754760297337,
      "raw_weight": -0.177447862606349,
      "x": 11,
      "y": 5
    },
    {
      "normalized_weight": -0.14619735098971004,
      "raw_weight": -0.11549590728187097,
      "x": 11,
      "y": 6
    },
    {
      "normalized_weight": -0.10804518043575888,
      "raw_weight": -0.08535569254424955,
      "x": 11,
      "y": 7
    },
    {
      "normalized_weight": -0.09445266872116508,
      "raw_weight": -0.07461760828972043,
      "x": 11,
      "y": 8
    },
    {
      "normalized_weight": -0.05533613512134157,
      "raw_weight": -0.043715546745859854,
      "x": 11,
      "y": 9
    },
    {
      "normalized_weight": -0.0440339168520412,
      "raw_weight": -0.03478679431311256,
      "x": 11,
      "y": 10
    },
    {
      "normalized_weight": -0.048948665473372774,
      "raw_weight": -0.0386694457239645,
      "x": 11,
      "y": 11
    },
    {
      "normalized_weight": -0.005783072378884587,
      "raw_weight": -0.004568627179318825,
      "x": 11,
      "y": 12
    },
    {
      "normalized_weight": 0.017254054601160924,
      "raw_weight": 0.013630703134917136,
      "x": 11,
      "y": 13
    },
    {
      "normalized_weight": 0.03405968544558033,
      "raw_weight": 0.026907151502008467,
      "x": 11,
      "y": 14
    },
    {
      "normalized_weight": 0.07705782483998266,
      "raw_weight": 0.06087568162358633,
      "x": 11,
      "y": 15
    },
    {
      "normalized_weight": -0.5505995841905986,
      "raw_weight": -0.4349736715105731,
      "x": 12,
      "y": -16
    },
    {
      "normalized_weight": -0.5604525846456042,
      "raw_weight": -0.44275754187002747,
      "x": 12,
      "y": -15
    },
    {
      "normalized_weight": -0.5646677029238416,
      "raw_weight": -0.44608748530983505,
      "x": 12,
      "y": -14
    },
    {
      "normalized_weight": -0.5254140965444681,
      "raw_weight": -0.41507713627013,
      "x": 12,
      "y": -13
    },
    {
      "normalized_weight": -0.4913823905773449,
      "raw_weight": -0.3881920885561026,
      "x": 12,
      "y": -12
    },
    {
      "normalized_weight": -0.4579556571193944,
      "raw_weight": -0.3617849691243217,
      "x": 12,
      "y": -11
    },
    {
      "normalized_weight": -0.39157528523325424,
      "raw_weight": -0.30934447533427095,
      "x": 12,
      "y": -10
    },
    {
      "normalized_weight": -0.3809973208790116,
      "raw_weight": -0.3009878834944193,
      "x": 12,
      "y": -9
    },
    {
      "normalized_weight": -0.3975767567099929,
      "raw_weight": -0.3140856378008945,
      "x": 12,
      "y": -8
    },
    {
      "normalized_weight": -0.41267882459548544,
      "raw_weight": -0.3260162714304336,
      "x": 12,
      "y": -7
    },
    {
      "normalized_weight": -0.4418509271460441,
      "raw_weight": -0.349062232445375,
      "x": 12,
      "y": -6
    },
    {
      "normalized_weight": -0.44931522129581947,
      "raw_weight": -0.3549590248236975,
      "x": 12,
      "y": -5
    },
    {
      "normalized_weight": -0.4649220524101361,
      "raw_weight": -0.36728842140400764,
      "x": 12,
      "y": -4
    },
    {
      "normalized_weight": -0.468913737943611,
      "raw_weight": -0.37044185297545285,
      "x": 12,
      "y": -3
    },
    {
      "normalized_weight": -0.48100757746554074,
      "raw_weight": -0.3799959861977773,
      "x": 12,
      "y": -2
    },
    {
      "normalized_weight": -0.49307105006043783,
      "raw_weight": -0.389526129547746,
      "x": 12,
      "y": -1
    },
    {
      "normalized_weight": -0.4608084868572695,
      "raw_weight": -0.364038704617243,
      "x": 12,
      "y": 0
    },
    {
      "normalized_weight": -0.4356563557359235,
      "raw_weight": -0.3441685210313797,
      "x": 12,
      "y": 1
    },
    {
      "normalized_weight": -0.40171043135263507,
      "raw_weight": -0.3173512407685818,
      "x": 12,
      "y": 2
    },
    {
      "normalized_weight": -0.3546284360355475,
      "raw_weight": -0.2801564644680826,
      "x": 12,
      "y": 3
    },
    {
      "normalized_weight": -0.30436112423760864,
      "raw_weight": -0.2404452881477109,
      "x": 12,
      "y": 4
    },
    {
      "normalized_weight": -0.25530324540500327,
      "raw_weight": -0.20168956386995263,
      "x": 12,
      "y": 5
    },
    {
      "normalized_weight": -0.17766507010722932,
      "raw_weight": -0.1403554053847112,
      "x": 12,
      "y": 6
    },
    {
      "normalized_weight": -0.1371893457588338,
      "raw_weight": -0.10837958314947872,
      "x": 12,
      "y": 7
    },
    {
      "normalized_weight": -0.11269299916875296,
      "raw_weight": -0.08902746934331486,
      "x": 12,
      "y": 8
    },
    {
      "normalized_weight": -0.09297962847376338,
      "raw_weight": -0.0734539064942731,
      "x": 12,
      "y": 9
    },
    {
      "normalized_weight": -0.06222179423223189,
      "raw_weight": -0.04915521744346321,
      "x": 12,
      "y": 10
    },
    {
      "normalized_weight": -0.04696574465822467,
      "raw_weight": -0.037102938279997506,
      "x": 12,
      "y": 11
    },
    {
      "normalized_weight": -0.017848818339842375,
      "raw_weight": -0.01410056648847548,
      "x": 12,
      "y": 12
    },
    {
      "normalized_weight": 0.022696030784360097,
      "raw_weight": 0.01792986431964448,
      "x": 12,
      "y": 13
    },
    {
      "normalized_weight": 0.042277727159461556,
      "raw_weight": 0.03339940445597464,
      "x": 12,
      "y": 14
    },
    {
      "normalized_weight": 0.08310377871191846,
      "raw_weight": 0.0656519851824156,
      "x": 12,
      "y": 15
    },
    {
      "normalized_weight": -0.5486309789374265,
      "raw_weight": -0.43341847336056705,
      "x": 13,
      "y": -16
    },
    {
      "normalized_weight": -0.5556426408703639,
      "raw_weight": -0.4389576862875876,
      "x": 13,
      "y": -15
    },
    {
      "normalized_weight": -0.532955377588761,
      "raw_weight": -0.42103474829512133,
      "x": 13,
      "y": -14
    },
    {
      "normalized_weight": -0.5084856733334644,
      "raw_weight": -0.40170368193343703,
      "x": 13,
      "y": -13
    },
    {
      "normalized_weight": -0.4772681885095747,
      "raw_weight": -0.37704186892256414,
      "x": 13,
      "y": -12
    },
    {
      "normalized_weight": -0.4421469263538348,
      "raw_weight": -0.3492960718195296,
      "x": 13,
      "y": -11
    },
    {
      "normalized_weight": -0.3910524599631595,
      "raw_weight": -0.3089314433708961,
      "x": 13,
      "y": -10
    },
    {
      "normalized_weight": -0.3974499332401206,
      "raw_weight": -0.3139854472596954,
      "x": 13,
      "y": -9
    },
    {
      "normalized_weight": -0.3844724831600857,
      "raw_weight": -0.3037332616964678,
      "x": 13,
      "y": -8
    },
    {
      "normalized_weight": -0.3930909321634054,
      "raw_weight": -0.3105418364090904,
      "x": 13,
      "y": -7
    },
    {
      "normalized_weight": -0.4140826378608384,
      "raw_weight": -0.3271252839100624,
      "x": 13,
      "y": -6
    },
    {
      "normalized_weight": -0.44936254395652697,
      "raw_weight": -0.35499640972565644,
      "x": 13,
      "y": -5
    },
    {
      "normalized_weight": -0.4791612918456954,
      "raw_weight": -0.37853742055809947,
      "x": 13,
      "y": -4
    },
    {
      "normalized_weight": -0.48710784459296264,
      "raw_weight": -0.3848151972284406,
      "x": 13,
      "y": -3
    },
    {
      "normalized_weight": -0.49000269917228634,
      "raw_weight": -0.38710213234610635,
      "x": 13,
      "y": -2
    },
    {
      "normalized_weight": -0.48490090369570094,
      "raw_weight": -0.3830717139196039,
      "x": 13,
      "y": -1
    },
    {
      "normalized_weight": -0.45916996879784605,
      "raw_weight": -0.3627442753502985,
      "x": 13,
      "y": 0
    },
    {
      "normalized_weight": -0.4328000903150691,
      "raw_weight": -0.3419120713489047,
      "x": 13,
      "y": 1
    },
    {
      "normalized_weight": -0.41876086705075405,
      "raw_weight": -0.3308210849700958,
      "x": 13,
      "y": 2
    },
    {
      "normalized_weight": -0.3631095169448617,
      "raw_weight": -0.28685651838644083,
      "x": 13,
      "y": 3
    },
    {
      "normalized_weight": -0.2994154724897378,
      "raw_weight": -0.23653822326689294,
      "x": 13,
      "y": 4
    },
    {
      "normalized_weight": -0.2497771709904459,
      "raw_weight": -0.19732396508245234,
      "x": 13,
      "y": 5
    },
    {
      "normalized_weight": -0.1893377889852911,
      "raw_weight": -0.14957685329838002,
      "x": 13,
      "y": 6
    },
    {
      "normalized_weight": -0.16111755087338772,
      "raw_weight": -0.12728286518997634,
      "x": 13,
      "y": 7
    },
    {
      "normalized_weight": -0.14000106169256654,
      "raw_weight": -0.1106008387371276,
      "x": 13,
      "y": 8
    },
    {
      "normalized_weight": -0.11099023017709037,
      "raw_weight": -0.08768228183990141,
      "x": 13,
      "y": 9
    },
    {
      "normalized_weight": -0.07187573797473563,
      "raw_weight": -0.05678183300004117,
      "x": 13,
      "y": 10
    },
    {
      "normalized_weight": -0.06417442889924707,
      "raw_weight": -0.050697798830405205,
      "x": 13,
      "y": 11
    },
    {
      "normalized_weight": -0.03540029982336632,
      "raw_weight": -0.027966236860459404,
      "x": 13,
      "y": 12
    },
    {
      "normalized_weight": 0.010194239731212893,
      "raw_weight": 0.008053449387658188,
      "x": 13,
      "y": 13
    },
    {
      "normalized_weight": 0.04673999628023662,
      "raw_weight": 0.03692459706138694,
      "x": 13,
      "y": 14
    },
    {
      "normalized_weight": 0.10253224473655284,
      "raw_weight": 0.08100047334187677,
      "x": 13,
      "y": 15
    },
    {
      "normalized_weight": -0.523327788114202,
      "raw_weight": -0.4134289526102197,
      "x": 14,
      "y": -16
    },
    {
      "normalized_weight": -0.5234315073203117,
      "raw_weight": -0.4135108907830464,
      "x": 14,
      "y": -15
    },
    {
      "normalized_weight": -0.505316738637479,
      "raw_weight": -0.39920022352360846,
      "x": 14,
      "y": -14
    },
    {
      "normalized_weight": -0.49045781094604424,
      "raw_weight": -0.3874616706473751,
      "x": 14,
      "y": -13
    },
    {
      "normalized_weight": -0.46691410571742775,
      "raw_weight": -0.36886214351676805,
      "x": 14,
      "y": -12
    },
    {
      "normalized_weight": -0.42583391003172116,
      "raw_weight": -0.3364087889250598,
      "x": 14,
      "y": -11
    },
    {
      "normalized_weight": -0.3759311368417674,
      "raw_weight": -0.2969855981049963,
      "x": 14,
      "y": -10
    },
    {
      "normalized_weight": -0.3651146819078303,
      "raw_weight": -0.288440598707186,
      "x": 14,
      "y": -9
    },
    {
      "normalized_weight": -0.3456441617576443,
      "raw_weight": -0.2730588877885391,
      "x": 14,
      "y": -8
    },
    {
      "normalized_weight": -0.35632385068522715,
      "raw_weight": -0.28149584204132955,
      "x": 14,
      "y": -7
    },
    {
      "normalized_weight": -0.38709605799975655,
      "raw_weight": -0.3058058858198078,
      "x": 14,
      "y": -6
    },
    {
      "normalized_weight": -0.43585966450848584,
      "raw_weight": -0.3443291349617039,
      "x": 14,
      "y": -5
    },
    {
      "normalized_weight": -0.46450534861530113,
      "raw_weight": -0.366959225406088,
      "x": 14,
      "y": -4
    },
    {
      "normalized_weight": -0.4918985321750984,
      "raw_weight": -0.38859984041832785,
      "x": 14,
      "y": -3
    },
    {
      "normalized_weight": -0.48754263574493256,
      "raw_weight": -0.38515868223849686,
      "x": 14,
      "y": -2
    },
    {
      "normalized_weight": -0.47454990166518873,
      "raw_weight": -0.37489442231549924,
      "x": 14,
      "y": -1
    },
    {
      "normalized_weight": -0.4456756326988765,
      "raw_weight": -0.35208374983211255,
      "x": 14,
      "y": 0
    },
    {
      "normalized_weight": -0.4181217901466036,
      "raw_weight": -0.330316214215817,
      "x": 14,
      "y": 1
    },
    {
      "normalized_weight": -0.40710480762074575,
      "raw_weight": -0.3216127980203892,
      "x": 14,
      "y": 2
    },
    {
      "normalized_weight": -0.3588135625969192,
      "raw_weight": -0.2834627144515663,
      "x": 14,
      "y": 3
    },
    {
      "normalized_weight": -0.29380600213512875,
      "raw_weight": -0.23210674168675177,
      "x": 14,
      "y": 4
    },
    {
      "normalized_weight": -0.23041698093455137,
      "raw_weight": -0.18202941493829564,
      "x": 14,
      "y": 5
    },
    {
      "normalized_weight": -0.1951967006508709,
      "raw_weight": -0.15420539351418808,
      "x": 14,
      "y": 6
    },
    {
      "normalized_weight": -0.1536508670940337,
      "raw_weight": -0.12138418500428666,
      "x": 14,
      "y": 7
    },
    {
      "normalized_weight": -0.13222137954799815,
      "raw_weight": -0.10445488984291858,
      "x": 14,
      "y": 8
    },
    {
      "normalized_weight": -0.12353186683873926,
      "raw_weight": -0.09759017480260405,
      "x": 14,
      "y": 9
    },
    {
      "normalized_weight": -0.07875251563478344,
      "raw_weight": -0.062214487351478935,
      "x": 14,
      "y": 10
    },
    {
      "normalized_weight": -0.06460528805867305,
      "raw_weight": -0.051038177566351726,
      "x": 14,
      "y": 11
    },
    {
      "normalized_weight": -0.03041526706713205,
      "raw_weight": -0.024028060983034328,
      "x": 14,
      "y": 12
    },
    {
      "normalized_weight": 0.027980965891068323,
      "raw_weight": 0.022104963053943983,
      "x": 14,
      "y": 13
    },
    {
      "normalized_weight": 0.07972806282644301,
      "raw_weight": 0.06298516963289,
      "x": 14,
      "y": 14
    },
    {
      "normalized_weight": 0.12018337098142293,
      "raw_weight": 0.09494486307532414,
      "x": 14,
      "y": 15
    },
    {
      "normalized_weight": -0.4748342104324655,
      "raw_weight": -0.37511902624164783,
      "x": 15,
      "y": -16
    },
    {
      "normalized_weight": -0.47882621599516373,
      "raw_weight": -0.37827271063617945,
      "x": 15,
      "y": -15
    },
    {
      "normalized_weight": -0.463437187953886,
      "raw_weight": -0.36611537848357006,
      "x": 15,
      "y": -14
    },
    {
      "normalized_weight": -0.446544533095215,
      "raw_weight": -0.35277018114521996,
      "x": 15,
      "y": -13
    },
    {
      "normalized_weight": -0.4402790288358052,
      "raw_weight": -0.34782043278028624,
      "x": 15,
      "y": -12
    },
    {
      "normalized_weight": -0.3923417431228056,
      "raw_weight": -0.30994997706701655,
      "x": 15,
      "y": -11
    },
    {
      "normalized_weight": -0.34413633143127986,
      "raw_weight": -0.2718677018307112,
      "x": 15,
      "y": -10
    },
    {
      "normalized_weight": -0.3342108808069837,
      "raw_weight": -0.2640265958375172,
      "x": 15,
      "y": -9
    },
    {
      "normalized_weight": -0.31867224372927283,
      "raw_weight": -0.2517510725461256,
      "x": 15,
      "y": -8
    },
    {
      "normalized_weight": -0.3410938926196033,
      "raw_weight": -0.26946417516948673,
      "x": 15,
      "y": -7
    },
    {
      "normalized_weight": -0.38602752036721355,
      "raw_weight": -0.3049617410900988,
      "x": 15,
      "y": -6
    },
    {
      "normalized_weight": -0.42422531275773623,
      "raw_weight": -0.33513799707861175,
      "x": 15,
      "y": -5
    },
    {
      "normalized_weight": -0.45270250787900423,
      "raw_weight": -0.35763498122441345,
      "x": 15,
      "y": -4
    },
    {
      "normalized_weight": -0.48630364020377825,
      "raw_weight": -0.38417987576098495,
      "x": 15,
      "y": -3
    },
    {
      "normalized_weight": -0.516900738015419,
      "raw_weight": -0.40835158303218116,
      "x": 15,
      "y": -2
    },
    {
      "normalized_weight": -0.4972642347953232,
      "raw_weight": -0.3928387454883055,
      "x": 15,
      "y": -1
    },
    {
      "normalized_weight": -0.46239293920922536,
      "raw_weight": -0.36529042197528816,
      "x": 15,
      "y": 0
    },
    {
      "normalized_weight": -0.4114606856594749,
      "raw_weight": -0.3250539416709853,
      "x": 15,
      "y": 1
    },
    {
      "normalized_weight": -0.36336530219159413,
      "raw_weight": -0.2870585887313595,
      "x": 15,
      "y": 2
    },
    {
      "normalized_weight": -0.3242398282175767,
      "raw_weight": -0.2561494642918857,
      "x": 15,
      "y": 3
    },
    {
      "normalized_weight": -0.2897423807734258,
      "raw_weight": -0.22889648081100644,
      "x": 15,
      "y": 4
    },
    {
      "normalized_weight": -0.24166283319321621,
      "raw_weight": -0.19091363822264087,
      "x": 15,
      "y": 5
    },
    {
      "normalized_weight": -0.2180779511957699,
      "raw_weight": -0.17228158144465827,
      "x": 15,
      "y": 6
    },
    {
      "normalized_weight": -0.17102702360514244,
      "raw_weight": -0.13511134864806257,
      "x": 15,
      "y": 7
    },
    {
      "normalized_weight": -0.13041063271330625,
      "raw_weight": -0.10302439984351196,
      "x": 15,
      "y": 8
    },
    {
      "normalized_weight": -0.09778784468209267,
      "raw_weight": -0.07725239729885323,
      "x": 15,
      "y": 9
    },
    {
      "normalized_weight": -0.06659692659113571,
      "raw_weight": -0.052611572006997225,
      "x": 15,
      "y": 10
    },
    {
      "normalized_weight": -0.013820576415979632,
      "raw_weight": -0.010918255368623913,
      "x": 15,
      "y": 11
    },
    {
      "normalized_weight": 0.01240245296805264,
      "raw_weight": 0.009797937844761588,
      "x": 15,
      "y": 12
    },
    {
      "normalized_weight": 0.030546444803736316,
      "raw_weight": 0.024131691394951697,
      "x": 15,
      "y": 13
    },
    {
      "normalized_weight": 0.08591320265713222,
      "raw_weight": 0.06787143009913447,
      "x": 15,
      "y": 14
    },
    {
      "normalized_weight": 0.12153264683543809,
      "raw_weight": 0.09601079099999613,
      "x": 15,
      "y": 15
    },
    {
      "normalized_weight": 0,
      "raw_weight": 0,
      "x": 0,
      "y": 0
    }
  ])

  const speedPath = [
    {
      "x": -16,
      "y": 15
    },
    {
      "x": -15,
      "y": 13
    },
    {
      "x": -14,
      "y": 12
    },
    {
      "x": -13,
      "y": 11
    },
    {
      "x": -12,
      "y": 10
    },
    {
      "x": -11,
      "y": 10
    },
    {
      "x": -10,
      "y": 9
    },
    {
      "x": -8,
      "y": 9
    },
    {
      "x": -7,
      "y": 8
    },
    {
      "x": -6,
      "y": 7
    },
    {
      "x": -5,
      "y": 6
    },
    {
      "x": -4,
      "y": 5
    },
    {
      "x": -3,
      "y": 4
    },
    {
      "x": -3,
      "y": 3
    },
    {
      "x": -2,
      "y": 2
    },
    {
      "x": -1,
      "y": 1
    },
    {
      "x": -1,
      "y": 0
    },
    {
      "x": 0,
      "y": -1
    },
    {
      "x": 1,
      "y": -2
    },
    {
      "x": 2,
      "y": -3
    },
    {
      "x": 3,
      "y": -5
    },
    {
      "x": 4,
      "y": -6
    },
    {
      "x": 6,
      "y": -6
    },
    {
      "x": 7,
      "y": -7
    },
    {
      "x": 8,
      "y": -8
    },
    {
      "x": 9,
      "y": -9
    },
    {
      "x": 10,
      "y": -10
    },
    {
      "x": 11,
      "y": -11
    },
    {
      "x": 12,
      "y": -12
    },
    {
      "x": 12,
      "y": -13
    },
    {
      "x": 13,
      "y": -14
    },
    {
      "x": 15,
      "y": -16
    }
  ]

  const energyPath = [
    {
      "x": -16,
      "y": 15
    },
    {
      "x": -15,
      "y": 13
    },
    {
      "x": -14,
      "y": 13
    },
    {
      "x": -13,
      "y": 14
    },
    {
      "x": -12,
      "y": 15
    },
    {
      "x": -10,
      "y": 15
    },
    {
      "x": -9,
      "y": 14
    },
    {
      "x": -8,
      "y": 14
    },
    {
      "x": -6,
      "y": 14
    },
    {
      "x": -5,
      "y": 14
    },
    {
      "x": -4,
      "y": 14
    },
    {
      "x": -3,
      "y": 13
    },
    {
      "x": -2,
      "y": 13
    },
    {
      "x": -1,
      "y": 12
    },
    {
      "x": 0,
      "y": 13
    },
    {
      "x": 0,
      "y": 14
    },
    {
      "x": 1,
      "y": 15
    },
    {
      "x": 2,
      "y": 14
    },
    {
      "x": 3,
      "y": 13
    },
    {
      "x": 5,
      "y": 15
    },
    {
      "x": 7,
      "y": 14
    },
    {
      "x": 8,
      "y": 13
    },
    {
      "x": 9,
      "y": 12
    },
    {
      "x": 10,
      "y": 11
    },
    {
      "x": 11,
      "y": 10
    },
    {
      "x": 10,
      "y": 9
    },
    {
      "x": 9,
      "y": 8
    },
    {
      "x": 8,
      "y": 7
    },
    {
      "x": 8,
      "y": 6
    },
    {
      "x": 8,
      "y": 5
    },
    {
      "x": 7,
      "y": 4
    },
    {
      "x": 7,
      "y": 3
    },
    {
      "x": 7,
      "y": 1
    },
    {
      "x": 7,
      "y": 0
    },
    {
      "x": 6,
      "y": -1
    },
    {
      "x": 6,
      "y": -3
    },
    {
      "x": 8,
      "y": -3
    },
    {
      "x": 9,
      "y": -4
    },
    {
      "x": 10,
      "y": -5
    },
    {
      "x": 11,
      "y": -6
    },
    {
      "x": 11,
      "y": -7
    },
    {
      "x": 12,
      "y": -8
    },
    {
      "x": 13,
      "y": -9
    },
    {
      "x": 12,
      "y": -10
    },
    {
      "x": 13,
      "y": -11
    },
    {
      "x": 14,
      "y": -11
    },
    {
      "x": 15,
      "y": -12
    },
    {
      "x": 15,
      "y": -14
    },
    {
      "x": 15,
      "y": -16
    }
  ]

  const safetyPath = [
    {
      "x": -16,
      "y": 15
    },
    {
      "x": -16,
      "y": 13
    },
    {
      "x": -16,
      "y": 11
    },
    {
      "x": -16,
      "y": 10
    },
    {
      "x": -16,
      "y": 8
    },
    {
      "x": -16,
      "y": 6
    },
    {
      "x": -16,
      "y": 4
    },
    {
      "x": -16,
      "y": 3
    },
    {
      "x": -16,
      "y": 1
    },
    {
      "x": -16,
      "y": 0
    },
    {
      "x": -16,
      "y": -2
    },
    {
      "x": -16,
      "y": -4
    },
    {
      "x": -16,
      "y": -6
    },
    {
      "x": -14,
      "y": -6
    },
    {
      "x": -13,
      "y": -6
    },
    {
      "x": -11,
      "y": -6
    },
    {
      "x": -10,
      "y": -6
    },
    {
      "x": -9,
      "y": -7
    },
    {
      "x": -8,
      "y": -8
    },
    {
      "x": -7,
      "y": -9
    },
    {
      "x": -5,
      "y": -9
    },
    {
      "x": -4,
      "y": -9
    },
    {
      "x": -3,
      "y": -9
    },
    {
      "x": -2,
      "y": -10
    },
    {
      "x": -1,
      "y": -11
    },
    {
      "x": 0,
      "y": -12
    },
    {
      "x": 2,
      "y": -12
    },
    {
      "x": 3,
      "y": -12
    },
    {
      "x": 5,
      "y": -12
    },
    {
      "x": 6,
      "y": -12
    },
    {
      "x": 8,
      "y": -12
    },
    {
      "x": 9,
      "y": -12
    },
    {
      "x": 10,
      "y": -13
    },
    {
      "x": 11,
      "y": -14
    },
    {
      "x": 12,
      "y": -15
    },
    {
      "x": 14,
      "y": -16
    },
    {
      "x": 15,
      "y": -16
    }
  ]

  const [path, setPath] = useState(safetyPath);

  const config = {
    "mass": 20,
    "width": 0.225,
    "maxSpeed": 3,
    "minEnergy": 5,
    "stepUp": 0.6,
    "stepDown": 0.6,
    "inclineUp": 60,
    "inclineDown": 60
  }

  const [speed, setSpeed] = useState(0);
  const [safety, setSafety] = useState(100);
  const [energy, setEnergy] = useState(0);

  const handleGetPath = () => {
      let input_data = {
        "cells": myMap,
        "nodes": [
          {
            "edges": [
              {
                "x": -16,
                "y": 14
              },
              {
                "x": -15,
                "y": 15
              },
              {
                "x": -15,
                "y": 14
              },
              {
                "x": -16,
                "y": 13
              },
              {
                "x": -15,
                "y": 13
              }
            ],
            "x": -16,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 14,
                "y": -16
              },
              {
                "x": 15,
                "y": -15
              },
              {
                "x": 15,
                "y": -14
              },
              {
                "x": 13,
                "y": -14
              },
              {
                "x": 15,
                "y": -13
              }
            ],
            "x": 15,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 13
              },
              {
                "x": 0,
                "y": 14
              },
              {
                "x": 0,
                "y": 13
              },
              {
                "x": -2,
                "y": 13
              },
              {
                "x": -2,
                "y": 15
              }
            ],
            "x": -1,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -4
              },
              {
                "x": -6,
                "y": -3
              },
              {
                "x": -5,
                "y": -2
              },
              {
                "x": -4,
                "y": -3
              },
              {
                "x": -6,
                "y": -2
              },
              {
                "x": -4,
                "y": -2
              }
            ],
            "x": -5,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 15
              },
              {
                "x": -6,
                "y": 14
              },
              {
                "x": -4,
                "y": 14
              },
              {
                "x": -4,
                "y": 13
              },
              {
                "x": -4,
                "y": 15
              },
              {
                "x": -6,
                "y": 13
              }
            ],
            "x": -5,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -7,
                "y": -14
              },
              {
                "x": -5,
                "y": -14
              },
              {
                "x": -6,
                "y": -15
              },
              {
                "x": -6,
                "y": -13
              },
              {
                "x": -5,
                "y": -13
              },
              {
                "x": -5,
                "y": -15
              }
            ],
            "x": -6,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 12
              },
              {
                "x": 13,
                "y": 13
              },
              {
                "x": 13,
                "y": 14
              },
              {
                "x": 13,
                "y": 12
              },
              {
                "x": 15,
                "y": 12
              },
              {
                "x": 15,
                "y": 15
              }
            ],
            "x": 14,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -13
              },
              {
                "x": -12,
                "y": -14
              },
              {
                "x": -12,
                "y": -15
              },
              {
                "x": -14,
                "y": -13
              },
              {
                "x": -14,
                "y": -15
              },
              {
                "x": -13,
                "y": -16
              }
            ],
            "x": -13,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -8
              },
              {
                "x": 8,
                "y": -9
              },
              {
                "x": 6,
                "y": -9
              },
              {
                "x": 8,
                "y": -8
              },
              {
                "x": 6,
                "y": -10
              },
              {
                "x": 9,
                "y": -9
              },
              {
                "x": 7,
                "y": -11
              },
              {
                "x": 6,
                "y": -8
              }
            ],
            "x": 7,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 0
              },
              {
                "x": -15,
                "y": 1
              },
              {
                "x": -16,
                "y": 3
              },
              {
                "x": -14,
                "y": 1
              },
              {
                "x": -15,
                "y": -1
              }
            ],
            "x": -16,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 2,
                "y": 5
              },
              {
                "x": 3,
                "y": 4
              },
              {
                "x": 1,
                "y": 4
              },
              {
                "x": 3,
                "y": 5
              },
              {
                "x": 1,
                "y": 3
              },
              {
                "x": 2,
                "y": 2
              },
              {
                "x": 1,
                "y": 5
              },
              {
                "x": 3,
                "y": 3
              }
            ],
            "x": 2,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -7
              },
              {
                "x": -14,
                "y": -6
              },
              {
                "x": -13,
                "y": -5
              },
              {
                "x": -14,
                "y": -7
              },
              {
                "x": -12,
                "y": -5
              },
              {
                "x": -12,
                "y": -7
              },
              {
                "x": -14,
                "y": -5
              },
              {
                "x": -11,
                "y": -6
              }
            ],
            "x": -13,
            "y": -6
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 10
              },
              {
                "x": -14,
                "y": 11
              },
              {
                "x": -12,
                "y": 10
              },
              {
                "x": -14,
                "y": 12
              },
              {
                "x": -11,
                "y": 11
              }
            ],
            "x": -13,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 0,
                "y": 10
              },
              {
                "x": 2,
                "y": 10
              },
              {
                "x": 1,
                "y": 11
              },
              {
                "x": 2,
                "y": 11
              },
              {
                "x": 0,
                "y": 11
              },
              {
                "x": 0,
                "y": 9
              }
            ],
            "x": 1,
            "y": 10
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 5
              },
              {
                "x": -10,
                "y": 7
              },
              {
                "x": -9,
                "y": 7
              },
              {
                "x": -11,
                "y": 5
              },
              {
                "x": -11,
                "y": 7
              },
              {
                "x": -8,
                "y": 5
              }
            ],
            "x": -10,
            "y": 6
          },
          {
            "edges": [
              {
                "x": 8,
                "y": -14
              },
              {
                "x": 7,
                "y": -15
              },
              {
                "x": 8,
                "y": -15
              },
              {
                "x": 8,
                "y": -13
              },
              {
                "x": 5,
                "y": -14
              },
              {
                "x": 7,
                "y": -16
              },
              {
                "x": 7,
                "y": -12
              }
            ],
            "x": 7,
            "y": -14
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -16
              },
              {
                "x": -14,
                "y": -16
              },
              {
                "x": -12,
                "y": -15
              },
              {
                "x": -14,
                "y": -15
              },
              {
                "x": -13,
                "y": -14
              },
              {
                "x": -15,
                "y": -16
              },
              {
                "x": -11,
                "y": -16
              }
            ],
            "x": -13,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 0
              },
              {
                "x": -14,
                "y": 1
              },
              {
                "x": -12,
                "y": 2
              },
              {
                "x": -12,
                "y": 0
              },
              {
                "x": -14,
                "y": 0
              },
              {
                "x": -14,
                "y": 2
              }
            ],
            "x": -13,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 2,
                "y": 15
              },
              {
                "x": 4,
                "y": 14
              },
              {
                "x": 2,
                "y": 14
              },
              {
                "x": 1,
                "y": 15
              },
              {
                "x": 3,
                "y": 13
              },
              {
                "x": 5,
                "y": 15
              }
            ],
            "x": 3,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 1
              },
              {
                "x": -15,
                "y": -2
              },
              {
                "x": -14,
                "y": -1
              },
              {
                "x": -16,
                "y": -2
              },
              {
                "x": -16,
                "y": 0
              },
              {
                "x": -14,
                "y": 0
              }
            ],
            "x": -15,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -6
              },
              {
                "x": -13,
                "y": -7
              },
              {
                "x": -14,
                "y": -6
              },
              {
                "x": -13,
                "y": -8
              },
              {
                "x": -12,
                "y": -7
              },
              {
                "x": -16,
                "y": -8
              },
              {
                "x": -16,
                "y": -6
              },
              {
                "x": -14,
                "y": -9
              }
            ],
            "x": -14,
            "y": -7
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -15
              },
              {
                "x": 0,
                "y": -15
              },
              {
                "x": 1,
                "y": -14
              },
              {
                "x": 2,
                "y": -16
              },
              {
                "x": 0,
                "y": -14
              },
              {
                "x": -1,
                "y": -16
              },
              {
                "x": 2,
                "y": -14
              }
            ],
            "x": 1,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 14,
                "y": -1
              },
              {
                "x": 13,
                "y": 0
              },
              {
                "x": 13,
                "y": -2
              },
              {
                "x": 12,
                "y": 0
              },
              {
                "x": 14,
                "y": 0
              },
              {
                "x": 15,
                "y": -1
              }
            ],
            "x": 13,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -9,
                "y": -15
              },
              {
                "x": -8,
                "y": -16
              },
              {
                "x": -10,
                "y": -16
              },
              {
                "x": -10,
                "y": -15
              },
              {
                "x": -8,
                "y": -15
              },
              {
                "x": -7,
                "y": -16
              }
            ],
            "x": -9,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 0
              },
              {
                "x": -12,
                "y": -1
              },
              {
                "x": -14,
                "y": -1
              },
              {
                "x": -12,
                "y": 0
              },
              {
                "x": -12,
                "y": -2
              }
            ],
            "x": -13,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 9
              },
              {
                "x": -4,
                "y": 10
              },
              {
                "x": -3,
                "y": 9
              },
              {
                "x": -3,
                "y": 8
              },
              {
                "x": -3,
                "y": 10
              },
              {
                "x": -4,
                "y": 7
              },
              {
                "x": -5,
                "y": 10
              }
            ],
            "x": -4,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 4
              },
              {
                "x": -5,
                "y": 3
              },
              {
                "x": -6,
                "y": 2
              },
              {
                "x": -5,
                "y": 2
              },
              {
                "x": -6,
                "y": 5
              },
              {
                "x": -8,
                "y": 4
              }
            ],
            "x": -6,
            "y": 3
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -1
              },
              {
                "x": 9,
                "y": -1
              },
              {
                "x": 10,
                "y": -2
              },
              {
                "x": 10,
                "y": 0
              },
              {
                "x": 9,
                "y": 0
              },
              {
                "x": 9,
                "y": -2
              },
              {
                "x": 11,
                "y": 0
              },
              {
                "x": 11,
                "y": -2
              }
            ],
            "x": 10,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 14
              },
              {
                "x": -8,
                "y": 13
              },
              {
                "x": -10,
                "y": 14
              },
              {
                "x": -10,
                "y": 12
              },
              {
                "x": -8,
                "y": 14
              },
              {
                "x": -11,
                "y": 13
              },
              {
                "x": -8,
                "y": 12
              }
            ],
            "x": -9,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -3,
                "y": -13
              },
              {
                "x": -2,
                "y": -13
              },
              {
                "x": -4,
                "y": -11
              },
              {
                "x": -3,
                "y": -14
              },
              {
                "x": -1,
                "y": -12
              }
            ],
            "x": -3,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -15
              },
              {
                "x": 3,
                "y": -14
              },
              {
                "x": 4,
                "y": -15
              },
              {
                "x": 3,
                "y": -16
              },
              {
                "x": 2,
                "y": -16
              },
              {
                "x": 4,
                "y": -16
              },
              {
                "x": 4,
                "y": -14
              }
            ],
            "x": 3,
            "y": -15
          },
          {
            "edges": [
              {
                "x": -11,
                "y": 0
              },
              {
                "x": -10,
                "y": -1
              },
              {
                "x": -9,
                "y": 1
              },
              {
                "x": -9,
                "y": -1
              },
              {
                "x": -10,
                "y": -2
              },
              {
                "x": -9,
                "y": 2
              }
            ],
            "x": -10,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -14,
                "y": -13
              },
              {
                "x": -14,
                "y": -11
              },
              {
                "x": -13,
                "y": -12
              },
              {
                "x": -13,
                "y": -13
              },
              {
                "x": -15,
                "y": -11
              },
              {
                "x": -16,
                "y": -13
              },
              {
                "x": -13,
                "y": -11
              }
            ],
            "x": -14,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 3
              },
              {
                "x": 10,
                "y": 2
              },
              {
                "x": 9,
                "y": 0
              },
              {
                "x": 9,
                "y": 4
              },
              {
                "x": 11,
                "y": 2
              }
            ],
            "x": 9,
            "y": 2
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 9
              },
              {
                "x": 10,
                "y": 8
              },
              {
                "x": 8,
                "y": 8
              },
              {
                "x": 8,
                "y": 7
              },
              {
                "x": 10,
                "y": 9
              },
              {
                "x": 10,
                "y": 7
              },
              {
                "x": 8,
                "y": 9
              }
            ],
            "x": 9,
            "y": 8
          },
          {
            "edges": [
              {
                "x": -3,
                "y": -12
              },
              {
                "x": -3,
                "y": -13
              },
              {
                "x": -2,
                "y": -14
              },
              {
                "x": -1,
                "y": -13
              },
              {
                "x": -3,
                "y": -14
              },
              {
                "x": -1,
                "y": -12
              },
              {
                "x": -1,
                "y": -14
              }
            ],
            "x": -2,
            "y": -13
          },
          {
            "edges": [
              {
                "x": -16,
                "y": -13
              },
              {
                "x": -16,
                "y": -15
              },
              {
                "x": -15,
                "y": -14
              },
              {
                "x": -16,
                "y": -16
              },
              {
                "x": -14,
                "y": -13
              }
            ],
            "x": -16,
            "y": -14
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 3
              },
              {
                "x": -6,
                "y": 5
              },
              {
                "x": -5,
                "y": 3
              },
              {
                "x": -6,
                "y": 6
              },
              {
                "x": -4,
                "y": 4
              },
              {
                "x": -8,
                "y": 4
              }
            ],
            "x": -6,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -14,
                "y": -9
              },
              {
                "x": -15,
                "y": -10
              },
              {
                "x": -16,
                "y": -8
              },
              {
                "x": -16,
                "y": -10
              },
              {
                "x": -14,
                "y": -10
              }
            ],
            "x": -15,
            "y": -9
          },
          {
            "edges": [
              {
                "x": 2,
                "y": 4
              },
              {
                "x": 3,
                "y": 5
              },
              {
                "x": 1,
                "y": 5
              },
              {
                "x": 3,
                "y": 4
              },
              {
                "x": 3,
                "y": 6
              },
              {
                "x": 1,
                "y": 4
              },
              {
                "x": 1,
                "y": 6
              }
            ],
            "x": 2,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 2,
                "y": 1
              },
              {
                "x": 0,
                "y": -1
              },
              {
                "x": 2,
                "y": -1
              },
              {
                "x": -1,
                "y": 0
              },
              {
                "x": 1,
                "y": -2
              },
              {
                "x": 3,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -2,
                "y": 8
              },
              {
                "x": -1,
                "y": 7
              },
              {
                "x": 0,
                "y": 8
              },
              {
                "x": -1,
                "y": 9
              },
              {
                "x": -2,
                "y": 9
              },
              {
                "x": -2,
                "y": 7
              },
              {
                "x": 0,
                "y": 7
              },
              {
                "x": 0,
                "y": 9
              }
            ],
            "x": -1,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 13
              },
              {
                "x": 12,
                "y": 14
              },
              {
                "x": 13,
                "y": 13
              },
              {
                "x": 13,
                "y": 15
              },
              {
                "x": 12,
                "y": 15
              },
              {
                "x": 12,
                "y": 13
              },
              {
                "x": 15,
                "y": 15
              }
            ],
            "x": 13,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 0
              },
              {
                "x": -12,
                "y": 0
              },
              {
                "x": -10,
                "y": -1
              },
              {
                "x": -12,
                "y": -1
              },
              {
                "x": -13,
                "y": 0
              }
            ],
            "x": -11,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -8
              },
              {
                "x": -11,
                "y": -8
              },
              {
                "x": -13,
                "y": -8
              },
              {
                "x": -12,
                "y": -7
              },
              {
                "x": -12,
                "y": -11
              }
            ],
            "x": -12,
            "y": -9
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -7
              },
              {
                "x": 11,
                "y": -5
              },
              {
                "x": 10,
                "y": -5
              },
              {
                "x": 12,
                "y": -5
              },
              {
                "x": 12,
                "y": -7
              },
              {
                "x": 9,
                "y": -6
              },
              {
                "x": 10,
                "y": -7
              }
            ],
            "x": 11,
            "y": -6
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -14
              },
              {
                "x": -14,
                "y": -12
              },
              {
                "x": -14,
                "y": -13
              },
              {
                "x": -13,
                "y": -12
              },
              {
                "x": -12,
                "y": -14
              },
              {
                "x": -12,
                "y": -12
              }
            ],
            "x": -13,
            "y": -13
          },
          {
            "edges": [
              {
                "x": -4,
                "y": 12
              },
              {
                "x": -5,
                "y": 11
              },
              {
                "x": -4,
                "y": 11
              },
              {
                "x": -4,
                "y": 13
              },
              {
                "x": -6,
                "y": 11
              },
              {
                "x": -6,
                "y": 13
              }
            ],
            "x": -5,
            "y": 12
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 14
              },
              {
                "x": 11,
                "y": 13
              },
              {
                "x": 10,
                "y": 12
              },
              {
                "x": 11,
                "y": 12
              },
              {
                "x": 9,
                "y": 12
              },
              {
                "x": 10,
                "y": 15
              },
              {
                "x": 9,
                "y": 15
              },
              {
                "x": 8,
                "y": 13
              }
            ],
            "x": 10,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -11,
                "y": 3
              },
              {
                "x": -11,
                "y": 5
              },
              {
                "x": -12,
                "y": 4
              },
              {
                "x": -10,
                "y": 5
              },
              {
                "x": -12,
                "y": 5
              },
              {
                "x": -9,
                "y": 4
              },
              {
                "x": -10,
                "y": 3
              }
            ],
            "x": -11,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -4,
                "y": -10
              },
              {
                "x": -5,
                "y": -9
              },
              {
                "x": -5,
                "y": -11
              },
              {
                "x": -6,
                "y": -11
              },
              {
                "x": -4,
                "y": -9
              },
              {
                "x": -4,
                "y": -11
              }
            ],
            "x": -5,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -13
              },
              {
                "x": 12,
                "y": -14
              },
              {
                "x": 11,
                "y": -15
              },
              {
                "x": 12,
                "y": -15
              },
              {
                "x": 12,
                "y": -13
              },
              {
                "x": 10,
                "y": -15
              },
              {
                "x": 13,
                "y": -14
              },
              {
                "x": 11,
                "y": -16
              },
              {
                "x": 10,
                "y": -13
              }
            ],
            "x": 11,
            "y": -14
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 6
              },
              {
                "x": -11,
                "y": 4
              },
              {
                "x": -11,
                "y": 5
              },
              {
                "x": -9,
                "y": 4
              },
              {
                "x": -10,
                "y": 7
              },
              {
                "x": -10,
                "y": 3
              },
              {
                "x": -8,
                "y": 5
              },
              {
                "x": -8,
                "y": 4
              }
            ],
            "x": -10,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 8
              },
              {
                "x": 3,
                "y": 6
              },
              {
                "x": 4,
                "y": 7
              },
              {
                "x": 4,
                "y": 6
              },
              {
                "x": 4,
                "y": 8
              }
            ],
            "x": 3,
            "y": 7
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 14
              },
              {
                "x": 9,
                "y": 15
              },
              {
                "x": 11,
                "y": 15
              },
              {
                "x": 10,
                "y": 13
              },
              {
                "x": 12,
                "y": 15
              },
              {
                "x": 7,
                "y": 15
              }
            ],
            "x": 10,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 12
              },
              {
                "x": -4,
                "y": 12
              },
              {
                "x": -4,
                "y": 10
              },
              {
                "x": -3,
                "y": 11
              },
              {
                "x": -5,
                "y": 11
              },
              {
                "x": -6,
                "y": 11
              },
              {
                "x": -5,
                "y": 10
              }
            ],
            "x": -4,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -6,
                "y": -14
              },
              {
                "x": -8,
                "y": -14
              },
              {
                "x": -8,
                "y": -13
              },
              {
                "x": -6,
                "y": -15
              },
              {
                "x": -6,
                "y": -13
              },
              {
                "x": -8,
                "y": -15
              },
              {
                "x": -7,
                "y": -16
              }
            ],
            "x": -7,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -16
              },
              {
                "x": 15,
                "y": -15
              },
              {
                "x": 15,
                "y": -13
              },
              {
                "x": 15,
                "y": -12
              },
              {
                "x": 13,
                "y": -14
              },
              {
                "x": 14,
                "y": -16
              }
            ],
            "x": 15,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -2
              },
              {
                "x": 1,
                "y": -4
              },
              {
                "x": 1,
                "y": -2
              },
              {
                "x": 3,
                "y": -2
              },
              {
                "x": 3,
                "y": -4
              },
              {
                "x": 3,
                "y": -5
              },
              {
                "x": 1,
                "y": -5
              }
            ],
            "x": 2,
            "y": -3
          },
          {
            "edges": [
              {
                "x": 5,
                "y": -6
              },
              {
                "x": 5,
                "y": -8
              },
              {
                "x": 4,
                "y": -7
              },
              {
                "x": 4,
                "y": -8
              },
              {
                "x": 4,
                "y": -6
              },
              {
                "x": 6,
                "y": -6
              },
              {
                "x": 6,
                "y": -8
              }
            ],
            "x": 5,
            "y": -7
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -12
              },
              {
                "x": 13,
                "y": -12
              },
              {
                "x": 12,
                "y": -11
              },
              {
                "x": 12,
                "y": -13
              },
              {
                "x": 13,
                "y": -11
              },
              {
                "x": 11,
                "y": -13
              },
              {
                "x": 11,
                "y": -11
              }
            ],
            "x": 12,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -11
              },
              {
                "x": 11,
                "y": -10
              },
              {
                "x": 10,
                "y": -9
              },
              {
                "x": 9,
                "y": -9
              },
              {
                "x": 11,
                "y": -11
              },
              {
                "x": 9,
                "y": -11
              }
            ],
            "x": 10,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 1,
                "y": -15
              },
              {
                "x": 3,
                "y": -15
              },
              {
                "x": 2,
                "y": -16
              },
              {
                "x": 2,
                "y": -14
              },
              {
                "x": 3,
                "y": -14
              },
              {
                "x": 3,
                "y": -16
              },
              {
                "x": 1,
                "y": -14
              }
            ],
            "x": 2,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -5
              },
              {
                "x": 10,
                "y": -3
              },
              {
                "x": 9,
                "y": -4
              },
              {
                "x": 9,
                "y": -3
              },
              {
                "x": 9,
                "y": -5
              },
              {
                "x": 11,
                "y": -5
              },
              {
                "x": 11,
                "y": -3
              }
            ],
            "x": 10,
            "y": -4
          },
          {
            "edges": [
              {
                "x": -3,
                "y": -12
              },
              {
                "x": -2,
                "y": -13
              },
              {
                "x": -3,
                "y": -13
              },
              {
                "x": -2,
                "y": -14
              },
              {
                "x": -4,
                "y": -14
              },
              {
                "x": -4,
                "y": -15
              },
              {
                "x": -3,
                "y": -16
              }
            ],
            "x": -3,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 11
              },
              {
                "x": 8,
                "y": 11
              },
              {
                "x": 9,
                "y": 12
              },
              {
                "x": 8,
                "y": 12
              },
              {
                "x": 10,
                "y": 12
              }
            ],
            "x": 9,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -4,
                "y": -7
              },
              {
                "x": -3,
                "y": -6
              },
              {
                "x": -4,
                "y": -5
              },
              {
                "x": -5,
                "y": -7
              },
              {
                "x": -3,
                "y": -7
              },
              {
                "x": -5,
                "y": -5
              }
            ],
            "x": -4,
            "y": -6
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 8
              },
              {
                "x": 8,
                "y": 8
              },
              {
                "x": 8,
                "y": 6
              },
              {
                "x": 7,
                "y": 8
              },
              {
                "x": 7,
                "y": 6
              },
              {
                "x": 9,
                "y": 6
              }
            ],
            "x": 8,
            "y": 7
          },
          {
            "edges": [
              {
                "x": 6,
                "y": -1
              },
              {
                "x": 6,
                "y": -3
              },
              {
                "x": 5,
                "y": -2
              },
              {
                "x": 7,
                "y": -1
              },
              {
                "x": 5,
                "y": -1
              },
              {
                "x": 7,
                "y": -4
              }
            ],
            "x": 6,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 1
              },
              {
                "x": -11,
                "y": 3
              },
              {
                "x": -13,
                "y": 3
              },
              {
                "x": -12,
                "y": 0
              },
              {
                "x": -14,
                "y": 2
              }
            ],
            "x": -12,
            "y": 2
          },
          {
            "edges": [
              {
                "x": -3,
                "y": -12
              },
              {
                "x": 0,
                "y": -12
              },
              {
                "x": -1,
                "y": -11
              },
              {
                "x": -1,
                "y": -13
              },
              {
                "x": -2,
                "y": -13
              },
              {
                "x": 0,
                "y": -13
              }
            ],
            "x": -1,
            "y": -12
          },
          {
            "edges": [
              {
                "x": -8,
                "y": 0
              },
              {
                "x": -9,
                "y": -1
              },
              {
                "x": -7,
                "y": 0
              },
              {
                "x": -9,
                "y": -2
              },
              {
                "x": -7,
                "y": -2
              },
              {
                "x": -6,
                "y": -1
              }
            ],
            "x": -8,
            "y": -1
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -3
              },
              {
                "x": 14,
                "y": -4
              },
              {
                "x": 14,
                "y": -3
              },
              {
                "x": 14,
                "y": -5
              },
              {
                "x": 13,
                "y": -4
              }
            ],
            "x": 15,
            "y": -4
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 15
              },
              {
                "x": 8,
                "y": 13
              },
              {
                "x": 7,
                "y": 12
              },
              {
                "x": 8,
                "y": 12
              },
              {
                "x": 6,
                "y": 12
              },
              {
                "x": 5,
                "y": 15
              }
            ],
            "x": 7,
            "y": 14
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -4
              },
              {
                "x": 14,
                "y": -3
              },
              {
                "x": 14,
                "y": -4
              },
              {
                "x": 13,
                "y": -3
              },
              {
                "x": 15,
                "y": -1
              }
            ],
            "x": 15,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 14
              },
              {
                "x": -12,
                "y": 15
              },
              {
                "x": -11,
                "y": 13
              },
              {
                "x": -11,
                "y": 15
              },
              {
                "x": -13,
                "y": 13
              },
              {
                "x": -13,
                "y": 15
              }
            ],
            "x": -12,
            "y": 14
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -8
              },
              {
                "x": 1,
                "y": -9
              },
              {
                "x": 2,
                "y": -10
              },
              {
                "x": 3,
                "y": -8
              },
              {
                "x": 1,
                "y": -10
              },
              {
                "x": 1,
                "y": -8
              },
              {
                "x": 2,
                "y": -7
              }
            ],
            "x": 2,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 3
              },
              {
                "x": -6,
                "y": 4
              },
              {
                "x": -4,
                "y": 3
              },
              {
                "x": -5,
                "y": 2
              },
              {
                "x": -4,
                "y": 4
              },
              {
                "x": -4,
                "y": 2
              },
              {
                "x": -6,
                "y": 2
              }
            ],
            "x": -5,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 11
              },
              {
                "x": -11,
                "y": 10
              },
              {
                "x": -12,
                "y": 9
              },
              {
                "x": -13,
                "y": 10
              },
              {
                "x": -11,
                "y": 11
              },
              {
                "x": -12,
                "y": 8
              },
              {
                "x": -13,
                "y": 9
              }
            ],
            "x": -12,
            "y": 10
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 1
              },
              {
                "x": 6,
                "y": 0
              },
              {
                "x": 5,
                "y": 1
              },
              {
                "x": 7,
                "y": 0
              },
              {
                "x": 5,
                "y": 0
              }
            ],
            "x": 6,
            "y": 1
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -10
              },
              {
                "x": -3,
                "y": -10
              },
              {
                "x": -4,
                "y": -9
              },
              {
                "x": -4,
                "y": -11
              },
              {
                "x": -5,
                "y": -9
              },
              {
                "x": -5,
                "y": -11
              },
              {
                "x": -3,
                "y": -9
              }
            ],
            "x": -4,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 8,
                "y": -2
              },
              {
                "x": 7,
                "y": -1
              },
              {
                "x": 9,
                "y": -1
              },
              {
                "x": 9,
                "y": 0
              },
              {
                "x": 7,
                "y": 0
              }
            ],
            "x": 8,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 15
              },
              {
                "x": -8,
                "y": 15
              },
              {
                "x": -9,
                "y": 14
              },
              {
                "x": -10,
                "y": 14
              },
              {
                "x": -8,
                "y": 14
              },
              {
                "x": -7,
                "y": 15
              },
              {
                "x": -11,
                "y": 15
              }
            ],
            "x": -9,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 5
              },
              {
                "x": -8,
                "y": 4
              },
              {
                "x": -10,
                "y": 3
              },
              {
                "x": -8,
                "y": 5
              },
              {
                "x": -11,
                "y": 4
              },
              {
                "x": -9,
                "y": 2
              }
            ],
            "x": -9,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -10
              },
              {
                "x": -4,
                "y": -10
              },
              {
                "x": -5,
                "y": -8
              },
              {
                "x": -4,
                "y": -9
              },
              {
                "x": -5,
                "y": -11
              },
              {
                "x": -7,
                "y": -9
              }
            ],
            "x": -5,
            "y": -9
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -4
              },
              {
                "x": 15,
                "y": -3
              },
              {
                "x": 14,
                "y": -3
              },
              {
                "x": 14,
                "y": -5
              },
              {
                "x": 13,
                "y": -4
              },
              {
                "x": 13,
                "y": -3
              },
              {
                "x": 14,
                "y": -6
              }
            ],
            "x": 14,
            "y": -4
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 8
              },
              {
                "x": 14,
                "y": 8
              },
              {
                "x": 12,
                "y": 8
              },
              {
                "x": 11,
                "y": 7
              },
              {
                "x": 13,
                "y": 5
              },
              {
                "x": 15,
                "y": 6
              }
            ],
            "x": 13,
            "y": 7
          },
          {
            "edges": [
              {
                "x": 14,
                "y": -9
              },
              {
                "x": 15,
                "y": -8
              },
              {
                "x": 13,
                "y": -8
              },
              {
                "x": 14,
                "y": -7
              },
              {
                "x": 15,
                "y": -9
              },
              {
                "x": 13,
                "y": -9
              },
              {
                "x": 13,
                "y": -7
              },
              {
                "x": 15,
                "y": -7
              }
            ],
            "x": 14,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -14
              },
              {
                "x": -13,
                "y": -16
              },
              {
                "x": -12,
                "y": -14
              },
              {
                "x": -12,
                "y": -16
              },
              {
                "x": -11,
                "y": -16
              },
              {
                "x": -11,
                "y": -14
              }
            ],
            "x": -12,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -3
              },
              {
                "x": 1,
                "y": -5
              },
              {
                "x": 1,
                "y": -2
              },
              {
                "x": 3,
                "y": -4
              },
              {
                "x": -1,
                "y": -4
              }
            ],
            "x": 1,
            "y": -4
          },
          {
            "edges": [
              {
                "x": -12,
                "y": 10
              },
              {
                "x": -11,
                "y": 11
              },
              {
                "x": -10,
                "y": 10
              },
              {
                "x": -10,
                "y": 11
              },
              {
                "x": -12,
                "y": 9
              },
              {
                "x": -10,
                "y": 9
              }
            ],
            "x": -11,
            "y": 10
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -10
              },
              {
                "x": -5,
                "y": -9
              },
              {
                "x": -6,
                "y": -11
              },
              {
                "x": -4,
                "y": -11
              },
              {
                "x": -4,
                "y": -10
              },
              {
                "x": -6,
                "y": -12
              },
              {
                "x": -7,
                "y": -11
              }
            ],
            "x": -5,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 5,
                "y": 9
              },
              {
                "x": 6,
                "y": 8
              },
              {
                "x": 4,
                "y": 8
              },
              {
                "x": 6,
                "y": 7
              },
              {
                "x": 4,
                "y": 9
              },
              {
                "x": 4,
                "y": 7
              }
            ],
            "x": 5,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 10
              },
              {
                "x": -1,
                "y": 10
              },
              {
                "x": 0,
                "y": 11
              },
              {
                "x": 0,
                "y": 9
              },
              {
                "x": -1,
                "y": 11
              },
              {
                "x": 1,
                "y": 11
              },
              {
                "x": -1,
                "y": 9
              }
            ],
            "x": 0,
            "y": 10
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 1
              },
              {
                "x": -2,
                "y": 2
              },
              {
                "x": -4,
                "y": 2
              },
              {
                "x": -3,
                "y": 3
              },
              {
                "x": -2,
                "y": 1
              },
              {
                "x": -2,
                "y": 3
              },
              {
                "x": -4,
                "y": 1
              },
              {
                "x": -4,
                "y": 3
              }
            ],
            "x": -3,
            "y": 2
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 4
              },
              {
                "x": 13,
                "y": 5
              },
              {
                "x": 15,
                "y": 6
              },
              {
                "x": 14,
                "y": 3
              },
              {
                "x": 12,
                "y": 5
              },
              {
                "x": 15,
                "y": 3
              }
            ],
            "x": 14,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 8
              },
              {
                "x": 10,
                "y": 9
              },
              {
                "x": 8,
                "y": 9
              },
              {
                "x": 10,
                "y": 8
              },
              {
                "x": 8,
                "y": 8
              }
            ],
            "x": 9,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -7,
                "y": 0
              },
              {
                "x": -6,
                "y": 1
              },
              {
                "x": -8,
                "y": 0
              },
              {
                "x": -6,
                "y": 2
              },
              {
                "x": -9,
                "y": 1
              },
              {
                "x": -9,
                "y": 2
              }
            ],
            "x": -7,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 9,
                "y": -3
              },
              {
                "x": 8,
                "y": -2
              },
              {
                "x": 7,
                "y": -4
              },
              {
                "x": 9,
                "y": -2
              },
              {
                "x": 9,
                "y": -4
              },
              {
                "x": 6,
                "y": -3
              }
            ],
            "x": 8,
            "y": -3
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 3
              },
              {
                "x": 0,
                "y": 4
              },
              {
                "x": 1,
                "y": 4
              },
              {
                "x": -1,
                "y": 4
              },
              {
                "x": -1,
                "y": 2
              }
            ],
            "x": 0,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 2
              },
              {
                "x": -3,
                "y": 1
              },
              {
                "x": -1,
                "y": 1
              },
              {
                "x": -2,
                "y": 0
              },
              {
                "x": -2,
                "y": 2
              },
              {
                "x": -1,
                "y": 0
              },
              {
                "x": -3,
                "y": 0
              },
              {
                "x": -1,
                "y": 2
              }
            ],
            "x": -2,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 1,
                "y": -15
              },
              {
                "x": -1,
                "y": -15
              },
              {
                "x": 0,
                "y": -14
              },
              {
                "x": -1,
                "y": -16
              },
              {
                "x": 1,
                "y": -14
              }
            ],
            "x": 0,
            "y": -15
          },
          {
            "edges": [
              {
                "x": -14,
                "y": 3
              },
              {
                "x": -16,
                "y": 3
              },
              {
                "x": -16,
                "y": 4
              },
              {
                "x": -14,
                "y": 2
              },
              {
                "x": -15,
                "y": 5
              }
            ],
            "x": -15,
            "y": 3
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -3
              },
              {
                "x": 14,
                "y": -3
              },
              {
                "x": 13,
                "y": -4
              },
              {
                "x": 13,
                "y": -2
              },
              {
                "x": 12,
                "y": -3
              },
              {
                "x": 14,
                "y": -4
              },
              {
                "x": 12,
                "y": -4
              }
            ],
            "x": 13,
            "y": -3
          },
          {
            "edges": [
              {
                "x": 11,
                "y": 5
              },
              {
                "x": 10,
                "y": 6
              },
              {
                "x": 11,
                "y": 7
              },
              {
                "x": 10,
                "y": 5
              },
              {
                "x": 12,
                "y": 5
              },
              {
                "x": 10,
                "y": 7
              }
            ],
            "x": 11,
            "y": 6
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -7
              },
              {
                "x": 6,
                "y": -6
              },
              {
                "x": 5,
                "y": -6
              },
              {
                "x": 7,
                "y": -4
              },
              {
                "x": 7,
                "y": -8
              }
            ],
            "x": 7,
            "y": -6
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -1
              },
              {
                "x": -7,
                "y": 1
              },
              {
                "x": -8,
                "y": 0
              },
              {
                "x": -6,
                "y": 1
              },
              {
                "x": -6,
                "y": -1
              }
            ],
            "x": -7,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -14,
                "y": 8
              },
              {
                "x": -16,
                "y": 8
              },
              {
                "x": -14,
                "y": 7
              },
              {
                "x": -16,
                "y": 9
              },
              {
                "x": -14,
                "y": 9
              },
              {
                "x": -16,
                "y": 7
              }
            ],
            "x": -15,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 13
              },
              {
                "x": 13,
                "y": 12
              },
              {
                "x": 14,
                "y": 11
              },
              {
                "x": 15,
                "y": 12
              },
              {
                "x": 13,
                "y": 13
              },
              {
                "x": 13,
                "y": 11
              },
              {
                "x": 15,
                "y": 11
              }
            ],
            "x": 14,
            "y": 12
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 2
              },
              {
                "x": 13,
                "y": 1
              },
              {
                "x": 12,
                "y": 2
              },
              {
                "x": 14,
                "y": 3
              },
              {
                "x": 11,
                "y": 2
              }
            ],
            "x": 13,
            "y": 2
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 4
              },
              {
                "x": -6,
                "y": 5
              },
              {
                "x": -5,
                "y": 6
              },
              {
                "x": -6,
                "y": 7
              },
              {
                "x": -7,
                "y": 7
              },
              {
                "x": -7,
                "y": 8
              }
            ],
            "x": -6,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -12
              },
              {
                "x": 0,
                "y": -12
              },
              {
                "x": 0,
                "y": -14
              },
              {
                "x": -1,
                "y": -13
              },
              {
                "x": 1,
                "y": -14
              }
            ],
            "x": 0,
            "y": -13
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -14
              },
              {
                "x": -14,
                "y": -12
              },
              {
                "x": -16,
                "y": -14
              },
              {
                "x": -13,
                "y": -13
              },
              {
                "x": -15,
                "y": -14
              },
              {
                "x": -13,
                "y": -12
              },
              {
                "x": -16,
                "y": -13
              }
            ],
            "x": -14,
            "y": -13
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -6
              },
              {
                "x": -12,
                "y": -4
              },
              {
                "x": -13,
                "y": -5
              },
              {
                "x": -13,
                "y": -4
              },
              {
                "x": -11,
                "y": -6
              },
              {
                "x": -10,
                "y": -6
              }
            ],
            "x": -12,
            "y": -5
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 7
              },
              {
                "x": 3,
                "y": 6
              },
              {
                "x": 4,
                "y": 5
              },
              {
                "x": 5,
                "y": 6
              },
              {
                "x": 4,
                "y": 7
              },
              {
                "x": 5,
                "y": 5
              }
            ],
            "x": 4,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 8
              },
              {
                "x": -2,
                "y": 8
              },
              {
                "x": -3,
                "y": 9
              },
              {
                "x": -2,
                "y": 10
              },
              {
                "x": -1,
                "y": 9
              },
              {
                "x": -3,
                "y": 8
              },
              {
                "x": -1,
                "y": 10
              }
            ],
            "x": -2,
            "y": 9
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -9
              },
              {
                "x": 4,
                "y": -8
              },
              {
                "x": 2,
                "y": -8
              },
              {
                "x": 2,
                "y": -7
              },
              {
                "x": 4,
                "y": -7
              }
            ],
            "x": 3,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -6
              },
              {
                "x": -1,
                "y": -8
              },
              {
                "x": 0,
                "y": -7
              },
              {
                "x": 0,
                "y": -8
              },
              {
                "x": 0,
                "y": -6
              },
              {
                "x": -3,
                "y": -7
              }
            ],
            "x": -1,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -6,
                "y": -14
              },
              {
                "x": -5,
                "y": -13
              },
              {
                "x": -4,
                "y": -14
              },
              {
                "x": -5,
                "y": -15
              },
              {
                "x": -4,
                "y": -15
              },
              {
                "x": -6,
                "y": -15
              },
              {
                "x": -6,
                "y": -13
              }
            ],
            "x": -5,
            "y": -14
          },
          {
            "edges": [
              {
                "x": -16,
                "y": -14
              },
              {
                "x": -15,
                "y": -14
              },
              {
                "x": -14,
                "y": -13
              },
              {
                "x": -16,
                "y": -15
              },
              {
                "x": -14,
                "y": -12
              }
            ],
            "x": -16,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 12,
                "y": -5
              },
              {
                "x": 13,
                "y": -4
              },
              {
                "x": 12,
                "y": -3
              },
              {
                "x": 13,
                "y": -3
              },
              {
                "x": 11,
                "y": -5
              },
              {
                "x": 11,
                "y": -3
              }
            ],
            "x": 12,
            "y": -4
          },
          {
            "edges": [
              {
                "x": -7,
                "y": -14
              },
              {
                "x": -8,
                "y": -14
              },
              {
                "x": -9,
                "y": -13
              },
              {
                "x": -6,
                "y": -13
              },
              {
                "x": -8,
                "y": -15
              },
              {
                "x": -10,
                "y": -13
              }
            ],
            "x": -8,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 3
              },
              {
                "x": 6,
                "y": 4
              },
              {
                "x": 8,
                "y": 5
              },
              {
                "x": 6,
                "y": 5
              },
              {
                "x": 9,
                "y": 4
              }
            ],
            "x": 7,
            "y": 4
          },
          {
            "edges": [
              {
                "x": 15,
                "y": 10
              },
              {
                "x": 14,
                "y": 9
              },
              {
                "x": 14,
                "y": 8
              },
              {
                "x": 14,
                "y": 10
              },
              {
                "x": 15,
                "y": 11
              }
            ],
            "x": 15,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 13
              },
              {
                "x": -9,
                "y": 15
              },
              {
                "x": -10,
                "y": 15
              },
              {
                "x": -9,
                "y": 14
              },
              {
                "x": -11,
                "y": 13
              },
              {
                "x": -11,
                "y": 15
              }
            ],
            "x": -10,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -9,
                "y": -10
              },
              {
                "x": -7,
                "y": -11
              },
              {
                "x": -9,
                "y": -9
              },
              {
                "x": -7,
                "y": -9
              },
              {
                "x": -10,
                "y": -10
              }
            ],
            "x": -8,
            "y": -10
          },
          {
            "edges": [
              {
                "x": -9,
                "y": -7
              },
              {
                "x": -7,
                "y": -7
              },
              {
                "x": -8,
                "y": -8
              },
              {
                "x": -7,
                "y": -8
              },
              {
                "x": -9,
                "y": -6
              },
              {
                "x": -9,
                "y": -8
              }
            ],
            "x": -8,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 8
              },
              {
                "x": -14,
                "y": 6
              },
              {
                "x": -14,
                "y": 8
              },
              {
                "x": -13,
                "y": 6
              },
              {
                "x": -15,
                "y": 6
              },
              {
                "x": -16,
                "y": 7
              }
            ],
            "x": -14,
            "y": 7
          },
          {
            "edges": [
              {
                "x": -15,
                "y": -1
              },
              {
                "x": -15,
                "y": -2
              },
              {
                "x": -16,
                "y": 0
              },
              {
                "x": -16,
                "y": -4
              },
              {
                "x": -14,
                "y": -3
              }
            ],
            "x": -16,
            "y": -2
          },
          {
            "edges": [
              {
                "x": 14,
                "y": -8
              },
              {
                "x": 14,
                "y": -9
              },
              {
                "x": 15,
                "y": -10
              },
              {
                "x": 15,
                "y": -8
              },
              {
                "x": 14,
                "y": -10
              },
              {
                "x": 15,
                "y": -7
              }
            ],
            "x": 15,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -2,
                "y": 2
              },
              {
                "x": -3,
                "y": 3
              },
              {
                "x": -2,
                "y": 4
              },
              {
                "x": -3,
                "y": 2
              },
              {
                "x": -3,
                "y": 4
              },
              {
                "x": -1,
                "y": 4
              },
              {
                "x": -1,
                "y": 2
              }
            ],
            "x": -2,
            "y": 3
          },
          {
            "edges": [
              {
                "x": 11,
                "y": 9
              },
              {
                "x": 11,
                "y": 11
              },
              {
                "x": 12,
                "y": 10
              },
              {
                "x": 10,
                "y": 11
              },
              {
                "x": 12,
                "y": 11
              },
              {
                "x": 12,
                "y": 9
              },
              {
                "x": 10,
                "y": 9
              }
            ],
            "x": 11,
            "y": 10
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -10
              },
              {
                "x": -10,
                "y": -11
              },
              {
                "x": -10,
                "y": -9
              },
              {
                "x": -9,
                "y": -10
              },
              {
                "x": -11,
                "y": -11
              },
              {
                "x": -9,
                "y": -9
              }
            ],
            "x": -10,
            "y": -10
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -5
              },
              {
                "x": -12,
                "y": -3
              },
              {
                "x": -13,
                "y": -4
              },
              {
                "x": -13,
                "y": -3
              },
              {
                "x": -11,
                "y": -3
              },
              {
                "x": -13,
                "y": -5
              }
            ],
            "x": -12,
            "y": -4
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 7
              },
              {
                "x": -2,
                "y": 6
              },
              {
                "x": -2,
                "y": 7
              },
              {
                "x": -4,
                "y": 7
              },
              {
                "x": -4,
                "y": 5
              },
              {
                "x": -2,
                "y": 5
              }
            ],
            "x": -3,
            "y": 6
          },
          {
            "edges": [
              {
                "x": 0,
                "y": 13
              },
              {
                "x": -1,
                "y": 12
              },
              {
                "x": 0,
                "y": 11
              },
              {
                "x": 1,
                "y": 12
              },
              {
                "x": -1,
                "y": 11
              },
              {
                "x": 1,
                "y": 13
              },
              {
                "x": -1,
                "y": 13
              }
            ],
            "x": 0,
            "y": 12
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -10
              },
              {
                "x": 10,
                "y": -9
              },
              {
                "x": 8,
                "y": -9
              },
              {
                "x": 8,
                "y": -8
              },
              {
                "x": 7,
                "y": -9
              },
              {
                "x": 9,
                "y": -7
              },
              {
                "x": 9,
                "y": -11
              }
            ],
            "x": 9,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 1
              },
              {
                "x": -4,
                "y": 0
              },
              {
                "x": -4,
                "y": 2
              },
              {
                "x": -5,
                "y": 1
              },
              {
                "x": -3,
                "y": 2
              },
              {
                "x": -3,
                "y": 0
              }
            ],
            "x": -4,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -1
              },
              {
                "x": 11,
                "y": 0
              },
              {
                "x": 11,
                "y": -2
              },
              {
                "x": 10,
                "y": -2
              },
              {
                "x": 10,
                "y": 0
              },
              {
                "x": 12,
                "y": 0
              }
            ],
            "x": 11,
            "y": -1
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -6
              },
              {
                "x": 10,
                "y": -4
              },
              {
                "x": 9,
                "y": -5
              },
              {
                "x": 11,
                "y": -5
              },
              {
                "x": 9,
                "y": -6
              },
              {
                "x": 12,
                "y": -5
              },
              {
                "x": 9,
                "y": -4
              }
            ],
            "x": 10,
            "y": -5
          },
          {
            "edges": [
              {
                "x": 12,
                "y": -12
              },
              {
                "x": 11,
                "y": -13
              },
              {
                "x": 11,
                "y": -11
              },
              {
                "x": 10,
                "y": -11
              },
              {
                "x": 12,
                "y": -11
              },
              {
                "x": 12,
                "y": -13
              },
              {
                "x": 10,
                "y": -13
              }
            ],
            "x": 11,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 2,
                "y": 4
              },
              {
                "x": 2,
                "y": 5
              },
              {
                "x": 3,
                "y": 4
              },
              {
                "x": 3,
                "y": 6
              },
              {
                "x": 4,
                "y": 5
              }
            ],
            "x": 3,
            "y": 5
          },
          {
            "edges": [
              {
                "x": -9,
                "y": -16
              },
              {
                "x": -10,
                "y": -14
              },
              {
                "x": -9,
                "y": -15
              },
              {
                "x": -10,
                "y": -16
              },
              {
                "x": -11,
                "y": -16
              },
              {
                "x": -10,
                "y": -13
              },
              {
                "x": -11,
                "y": -14
              }
            ],
            "x": -10,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -1
              },
              {
                "x": 9,
                "y": 2
              },
              {
                "x": 8,
                "y": -1
              },
              {
                "x": 9,
                "y": -1
              },
              {
                "x": 10,
                "y": 0
              }
            ],
            "x": 9,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -2
              },
              {
                "x": -1,
                "y": -4
              },
              {
                "x": -2,
                "y": -3
              },
              {
                "x": -2,
                "y": -4
              },
              {
                "x": 0,
                "y": -2
              }
            ],
            "x": -1,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 1
              },
              {
                "x": -15,
                "y": -1
              },
              {
                "x": -16,
                "y": -2
              },
              {
                "x": -15,
                "y": 1
              },
              {
                "x": -14,
                "y": 0
              }
            ],
            "x": -16,
            "y": 0
          },
          {
            "edges": [
              {
                "x": 5,
                "y": -10
              },
              {
                "x": 3,
                "y": -11
              },
              {
                "x": 5,
                "y": -9
              },
              {
                "x": 4,
                "y": -8
              },
              {
                "x": 2,
                "y": -10
              }
            ],
            "x": 4,
            "y": -10
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -9
              },
              {
                "x": -5,
                "y": -7
              },
              {
                "x": -4,
                "y": -7
              },
              {
                "x": -4,
                "y": -9
              },
              {
                "x": -6,
                "y": -7
              }
            ],
            "x": -5,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -4
              },
              {
                "x": -12,
                "y": -3
              },
              {
                "x": -14,
                "y": -3
              },
              {
                "x": -13,
                "y": -4
              },
              {
                "x": -14,
                "y": -4
              },
              {
                "x": -12,
                "y": -2
              }
            ],
            "x": -13,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -14,
                "y": 7
              },
              {
                "x": -13,
                "y": 6
              },
              {
                "x": -15,
                "y": 6
              },
              {
                "x": -15,
                "y": 5
              },
              {
                "x": -13,
                "y": 5
              },
              {
                "x": -14,
                "y": 8
              },
              {
                "x": -16,
                "y": 6
              }
            ],
            "x": -14,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -15,
                "y": -1
              },
              {
                "x": -16,
                "y": -2
              },
              {
                "x": -14,
                "y": -3
              },
              {
                "x": -14,
                "y": -1
              },
              {
                "x": -15,
                "y": -4
              }
            ],
            "x": -15,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 11
              },
              {
                "x": -8,
                "y": 11
              },
              {
                "x": -8,
                "y": 12
              },
              {
                "x": -9,
                "y": 11
              },
              {
                "x": -5,
                "y": 11
              },
              {
                "x": -8,
                "y": 9
              }
            ],
            "x": -7,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -7
              },
              {
                "x": -7,
                "y": -7
              },
              {
                "x": -7,
                "y": -9
              },
              {
                "x": -8,
                "y": -8
              },
              {
                "x": -6,
                "y": -7
              }
            ],
            "x": -7,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -6,
                "y": -3
              },
              {
                "x": -7,
                "y": -2
              },
              {
                "x": -8,
                "y": -3
              },
              {
                "x": -6,
                "y": -2
              },
              {
                "x": -8,
                "y": -4
              }
            ],
            "x": -7,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 2
              },
              {
                "x": -2,
                "y": 1
              },
              {
                "x": -4,
                "y": 1
              },
              {
                "x": -3,
                "y": 0
              },
              {
                "x": -2,
                "y": 0
              },
              {
                "x": -2,
                "y": 2
              },
              {
                "x": -4,
                "y": 0
              }
            ],
            "x": -3,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -14
              },
              {
                "x": 8,
                "y": -14
              },
              {
                "x": 7,
                "y": -15
              },
              {
                "x": 8,
                "y": -16
              },
              {
                "x": 7,
                "y": -16
              },
              {
                "x": 9,
                "y": -16
              },
              {
                "x": 9,
                "y": -14
              }
            ],
            "x": 8,
            "y": -15
          },
          {
            "edges": [
              {
                "x": -3,
                "y": -12
              },
              {
                "x": -2,
                "y": -13
              },
              {
                "x": -3,
                "y": -14
              },
              {
                "x": -2,
                "y": -14
              },
              {
                "x": -4,
                "y": -14
              }
            ],
            "x": -3,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 14
              },
              {
                "x": 12,
                "y": 15
              },
              {
                "x": 12,
                "y": 13
              },
              {
                "x": 11,
                "y": 13
              },
              {
                "x": 13,
                "y": 13
              },
              {
                "x": 13,
                "y": 15
              },
              {
                "x": 11,
                "y": 15
              }
            ],
            "x": 12,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -3,
                "y": -14
              },
              {
                "x": -5,
                "y": -14
              },
              {
                "x": -4,
                "y": -14
              },
              {
                "x": -5,
                "y": -15
              },
              {
                "x": -3,
                "y": -16
              }
            ],
            "x": -4,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 5
              },
              {
                "x": 14,
                "y": 3
              },
              {
                "x": 15,
                "y": 3
              },
              {
                "x": 13,
                "y": 5
              },
              {
                "x": 14,
                "y": 2
              },
              {
                "x": 15,
                "y": 6
              },
              {
                "x": 12,
                "y": 4
              }
            ],
            "x": 14,
            "y": 4
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -10
              },
              {
                "x": 11,
                "y": -12
              },
              {
                "x": 11,
                "y": -11
              },
              {
                "x": 9,
                "y": -11
              },
              {
                "x": 9,
                "y": -12
              },
              {
                "x": 11,
                "y": -10
              },
              {
                "x": 10,
                "y": -9
              }
            ],
            "x": 10,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 14
              },
              {
                "x": 10,
                "y": 15
              },
              {
                "x": 12,
                "y": 14
              },
              {
                "x": 13,
                "y": 15
              },
              {
                "x": 11,
                "y": 15
              },
              {
                "x": 15,
                "y": 15
              }
            ],
            "x": 12,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 13,
                "y": -8
              },
              {
                "x": 12,
                "y": -7
              },
              {
                "x": 11,
                "y": -8
              },
              {
                "x": 11,
                "y": -7
              },
              {
                "x": 13,
                "y": -9
              },
              {
                "x": 13,
                "y": -7
              }
            ],
            "x": 12,
            "y": -8
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 13
              },
              {
                "x": 10,
                "y": 15
              },
              {
                "x": 9,
                "y": 15
              },
              {
                "x": 11,
                "y": 13
              },
              {
                "x": 11,
                "y": 15
              }
            ],
            "x": 10,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -2,
                "y": -10
              },
              {
                "x": 0,
                "y": -10
              },
              {
                "x": -1,
                "y": -11
              },
              {
                "x": -1,
                "y": -9
              },
              {
                "x": 0,
                "y": -9
              },
              {
                "x": -2,
                "y": -9
              }
            ],
            "x": -1,
            "y": -10
          },
          {
            "edges": [
              {
                "x": -14,
                "y": 12
              },
              {
                "x": -15,
                "y": 13
              },
              {
                "x": -15,
                "y": 11
              },
              {
                "x": -16,
                "y": 13
              },
              {
                "x": -16,
                "y": 11
              },
              {
                "x": -14,
                "y": 13
              },
              {
                "x": -14,
                "y": 11
              }
            ],
            "x": -15,
            "y": 12
          },
          {
            "edges": [
              {
                "x": -6,
                "y": -14
              },
              {
                "x": -7,
                "y": -14
              },
              {
                "x": -5,
                "y": -15
              },
              {
                "x": -5,
                "y": -14
              },
              {
                "x": -7,
                "y": -16
              }
            ],
            "x": -6,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 11,
                "y": 6
              },
              {
                "x": 10,
                "y": 5
              },
              {
                "x": 12,
                "y": 5
              },
              {
                "x": 10,
                "y": 6
              },
              {
                "x": 10,
                "y": 4
              },
              {
                "x": 12,
                "y": 4
              }
            ],
            "x": 11,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 14
              },
              {
                "x": 9,
                "y": 15
              },
              {
                "x": 5,
                "y": 15
              },
              {
                "x": 8,
                "y": 13
              },
              {
                "x": 10,
                "y": 15
              }
            ],
            "x": 7,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -4
              },
              {
                "x": 15,
                "y": -3
              },
              {
                "x": 14,
                "y": -4
              },
              {
                "x": 13,
                "y": -3
              },
              {
                "x": 13,
                "y": -4
              },
              {
                "x": 14,
                "y": -5
              },
              {
                "x": 13,
                "y": -2
              }
            ],
            "x": 14,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -6,
                "y": -14
              },
              {
                "x": -7,
                "y": -14
              },
              {
                "x": -8,
                "y": -13
              },
              {
                "x": -5,
                "y": -13
              },
              {
                "x": -6,
                "y": -12
              },
              {
                "x": -5,
                "y": -14
              },
              {
                "x": -6,
                "y": -11
              }
            ],
            "x": -6,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -4
              },
              {
                "x": 8,
                "y": -3
              },
              {
                "x": 10,
                "y": -3
              },
              {
                "x": 9,
                "y": -2
              },
              {
                "x": 9,
                "y": -4
              },
              {
                "x": 8,
                "y": -2
              },
              {
                "x": 9,
                "y": -5
              }
            ],
            "x": 9,
            "y": -3
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 2
              },
              {
                "x": 7,
                "y": 4
              },
              {
                "x": 9,
                "y": 3
              },
              {
                "x": 10,
                "y": 4
              },
              {
                "x": 9,
                "y": 5
              },
              {
                "x": 10,
                "y": 5
              },
              {
                "x": 8,
                "y": 5
              }
            ],
            "x": 9,
            "y": 4
          },
          {
            "edges": [
              {
                "x": 5,
                "y": -7
              },
              {
                "x": 3,
                "y": -8
              },
              {
                "x": 4,
                "y": -10
              },
              {
                "x": 5,
                "y": -8
              },
              {
                "x": 4,
                "y": -7
              },
              {
                "x": 5,
                "y": -9
              },
              {
                "x": 4,
                "y": -6
              }
            ],
            "x": 4,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 8
              },
              {
                "x": -14,
                "y": 7
              },
              {
                "x": -14,
                "y": 9
              },
              {
                "x": -13,
                "y": 9
              },
              {
                "x": -14,
                "y": 6
              },
              {
                "x": -12,
                "y": 8
              },
              {
                "x": -16,
                "y": 8
              }
            ],
            "x": -14,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 14,
                "y": -8
              },
              {
                "x": 15,
                "y": -9
              },
              {
                "x": 13,
                "y": -9
              },
              {
                "x": 14,
                "y": -10
              },
              {
                "x": 15,
                "y": -10
              },
              {
                "x": 15,
                "y": -8
              },
              {
                "x": 13,
                "y": -8
              }
            ],
            "x": 14,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -4
              },
              {
                "x": -13,
                "y": -3
              },
              {
                "x": -11,
                "y": -3
              },
              {
                "x": -12,
                "y": -2
              },
              {
                "x": -13,
                "y": -4
              },
              {
                "x": -11,
                "y": -2
              }
            ],
            "x": -12,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 12
              },
              {
                "x": -4,
                "y": 11
              },
              {
                "x": -4,
                "y": 13
              },
              {
                "x": -3,
                "y": 13
              },
              {
                "x": -3,
                "y": 11
              },
              {
                "x": -5,
                "y": 11
              }
            ],
            "x": -4,
            "y": 12
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -3
              },
              {
                "x": -5,
                "y": -5
              },
              {
                "x": -6,
                "y": -3
              },
              {
                "x": -6,
                "y": -5
              },
              {
                "x": -4,
                "y": -3
              },
              {
                "x": -4,
                "y": -5
              }
            ],
            "x": -5,
            "y": -4
          },
          {
            "edges": [
              {
                "x": -8,
                "y": 15
              },
              {
                "x": -6,
                "y": 14
              },
              {
                "x": -8,
                "y": 14
              },
              {
                "x": -9,
                "y": 15
              },
              {
                "x": -5,
                "y": 15
              }
            ],
            "x": -7,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 12,
                "y": -12
              },
              {
                "x": 13,
                "y": -12
              },
              {
                "x": 12,
                "y": -11
              },
              {
                "x": 14,
                "y": -11
              },
              {
                "x": 12,
                "y": -10
              },
              {
                "x": 14,
                "y": -10
              }
            ],
            "x": 13,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 7
              },
              {
                "x": 3,
                "y": 9
              },
              {
                "x": 4,
                "y": 8
              },
              {
                "x": 4,
                "y": 9
              },
              {
                "x": 4,
                "y": 7
              }
            ],
            "x": 3,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 0
              },
              {
                "x": -1,
                "y": 1
              },
              {
                "x": -2,
                "y": 0
              },
              {
                "x": -1,
                "y": -1
              },
              {
                "x": -2,
                "y": 1
              },
              {
                "x": 0,
                "y": -1
              }
            ],
            "x": -1,
            "y": 0
          },
          {
            "edges": [
              {
                "x": 0,
                "y": -15
              },
              {
                "x": -1,
                "y": -15
              },
              {
                "x": -3,
                "y": -16
              },
              {
                "x": -1,
                "y": -14
              },
              {
                "x": 1,
                "y": -15
              }
            ],
            "x": -1,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -4,
                "y": 9
              },
              {
                "x": -5,
                "y": 10
              },
              {
                "x": -4,
                "y": 10
              },
              {
                "x": -3,
                "y": 9
              },
              {
                "x": -5,
                "y": 11
              }
            ],
            "x": -5,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -3,
                "y": -9
              },
              {
                "x": -3,
                "y": -7
              },
              {
                "x": -4,
                "y": -7
              },
              {
                "x": -4,
                "y": -9
              },
              {
                "x": -2,
                "y": -9
              }
            ],
            "x": -3,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 8
              },
              {
                "x": -2,
                "y": 9
              },
              {
                "x": -3,
                "y": 8
              },
              {
                "x": -2,
                "y": 7
              },
              {
                "x": -1,
                "y": 7
              },
              {
                "x": -3,
                "y": 9
              },
              {
                "x": -3,
                "y": 7
              }
            ],
            "x": -2,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 12
              },
              {
                "x": 6,
                "y": 11
              },
              {
                "x": 8,
                "y": 11
              },
              {
                "x": 8,
                "y": 12
              },
              {
                "x": 6,
                "y": 12
              },
              {
                "x": 6,
                "y": 10
              }
            ],
            "x": 7,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -16
              },
              {
                "x": 15,
                "y": -15
              },
              {
                "x": 15,
                "y": -14
              },
              {
                "x": 12,
                "y": -15
              },
              {
                "x": 13,
                "y": -14
              }
            ],
            "x": 14,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 10
              },
              {
                "x": -15,
                "y": 11
              },
              {
                "x": -16,
                "y": 9
              },
              {
                "x": -16,
                "y": 11
              },
              {
                "x": -14,
                "y": 9
              },
              {
                "x": -14,
                "y": 11
              }
            ],
            "x": -15,
            "y": 10
          },
          {
            "edges": [
              {
                "x": -16,
                "y": -2
              },
              {
                "x": -13,
                "y": -3
              },
              {
                "x": -15,
                "y": -2
              },
              {
                "x": -14,
                "y": -4
              },
              {
                "x": -15,
                "y": -4
              },
              {
                "x": -13,
                "y": -4
              }
            ],
            "x": -14,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -15,
                "y": -9
              },
              {
                "x": -16,
                "y": -6
              },
              {
                "x": -16,
                "y": -10
              },
              {
                "x": -14,
                "y": -7
              },
              {
                "x": -14,
                "y": -9
              }
            ],
            "x": -16,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 0
              },
              {
                "x": -10,
                "y": -1
              },
              {
                "x": -9,
                "y": -2
              },
              {
                "x": -10,
                "y": -3
              },
              {
                "x": -11,
                "y": -2
              },
              {
                "x": -11,
                "y": -3
              },
              {
                "x": -9,
                "y": -3
              },
              {
                "x": -9,
                "y": -1
              }
            ],
            "x": -10,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -14
              },
              {
                "x": -13,
                "y": -16
              },
              {
                "x": -14,
                "y": -16
              },
              {
                "x": -15,
                "y": -16
              },
              {
                "x": -15,
                "y": -14
              },
              {
                "x": -16,
                "y": -16
              }
            ],
            "x": -14,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 1,
                "y": -8
              },
              {
                "x": 2,
                "y": -7
              },
              {
                "x": 0,
                "y": -7
              },
              {
                "x": 2,
                "y": -8
              },
              {
                "x": 0,
                "y": -8
              },
              {
                "x": 0,
                "y": -6
              },
              {
                "x": 1,
                "y": -5
              }
            ],
            "x": 1,
            "y": -7
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 8
              },
              {
                "x": 11,
                "y": 7
              },
              {
                "x": 11,
                "y": 9
              },
              {
                "x": 12,
                "y": 8
              },
              {
                "x": 12,
                "y": 9
              }
            ],
            "x": 11,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -4
              },
              {
                "x": 14,
                "y": -4
              },
              {
                "x": 14,
                "y": -6
              },
              {
                "x": 13,
                "y": -4
              },
              {
                "x": 14,
                "y": -3
              }
            ],
            "x": 14,
            "y": -5
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -3
              },
              {
                "x": -14,
                "y": -3
              },
              {
                "x": -15,
                "y": -4
              },
              {
                "x": -13,
                "y": -4
              },
              {
                "x": -14,
                "y": -5
              },
              {
                "x": -16,
                "y": -4
              },
              {
                "x": -16,
                "y": -5
              }
            ],
            "x": -14,
            "y": -4
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -3
              },
              {
                "x": -3,
                "y": -4
              },
              {
                "x": -2,
                "y": -5
              },
              {
                "x": -1,
                "y": -4
              },
              {
                "x": -2,
                "y": -3
              }
            ],
            "x": -2,
            "y": -4
          },
          {
            "edges": [
              {
                "x": 4,
                "y": 9
              },
              {
                "x": 5,
                "y": 10
              },
              {
                "x": 3,
                "y": 11
              },
              {
                "x": 5,
                "y": 9
              },
              {
                "x": 3,
                "y": 9
              },
              {
                "x": 4,
                "y": 12
              }
            ],
            "x": 4,
            "y": 10
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -7
              },
              {
                "x": 0,
                "y": -6
              },
              {
                "x": -2,
                "y": -5
              },
              {
                "x": 0,
                "y": -7
              },
              {
                "x": -1,
                "y": -8
              }
            ],
            "x": -1,
            "y": -6
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 11
              },
              {
                "x": 3,
                "y": 13
              },
              {
                "x": 4,
                "y": 12
              },
              {
                "x": 2,
                "y": 13
              },
              {
                "x": 2,
                "y": 11
              },
              {
                "x": 5,
                "y": 12
              }
            ],
            "x": 3,
            "y": 12
          },
          {
            "edges": [
              {
                "x": -2,
                "y": 1
              },
              {
                "x": -1,
                "y": 0
              },
              {
                "x": -1,
                "y": 2
              },
              {
                "x": -2,
                "y": 0
              },
              {
                "x": -2,
                "y": 2
              }
            ],
            "x": -1,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 8,
                "y": -1
              },
              {
                "x": 8,
                "y": -3
              },
              {
                "x": 9,
                "y": -2
              },
              {
                "x": 9,
                "y": -3
              },
              {
                "x": 7,
                "y": -1
              },
              {
                "x": 9,
                "y": -1
              }
            ],
            "x": 8,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -2,
                "y": -4
              },
              {
                "x": -2,
                "y": -5
              },
              {
                "x": -4,
                "y": -3
              },
              {
                "x": -2,
                "y": -3
              },
              {
                "x": -4,
                "y": -5
              },
              {
                "x": -3,
                "y": -2
              }
            ],
            "x": -3,
            "y": -4
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 14
              },
              {
                "x": 7,
                "y": 11
              },
              {
                "x": 8,
                "y": 12
              },
              {
                "x": 6,
                "y": 12
              },
              {
                "x": 8,
                "y": 13
              },
              {
                "x": 6,
                "y": 11
              },
              {
                "x": 5,
                "y": 12
              },
              {
                "x": 8,
                "y": 11
              }
            ],
            "x": 7,
            "y": 12
          },
          {
            "edges": [
              {
                "x": -9,
                "y": -16
              },
              {
                "x": -8,
                "y": -13
              },
              {
                "x": -9,
                "y": -15
              },
              {
                "x": -8,
                "y": -16
              },
              {
                "x": -8,
                "y": -14
              },
              {
                "x": -7,
                "y": -14
              },
              {
                "x": -7,
                "y": -16
              }
            ],
            "x": -8,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 8,
                "y": 7
              },
              {
                "x": 8,
                "y": 8
              },
              {
                "x": 7,
                "y": 9
              },
              {
                "x": 6,
                "y": 8
              },
              {
                "x": 6,
                "y": 7
              },
              {
                "x": 8,
                "y": 9
              }
            ],
            "x": 7,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 5,
                "y": -7
              },
              {
                "x": 7,
                "y": -6
              },
              {
                "x": 4,
                "y": -6
              },
              {
                "x": 6,
                "y": -6
              },
              {
                "x": 4,
                "y": -7
              }
            ],
            "x": 5,
            "y": -6
          },
          {
            "edges": [
              {
                "x": -4,
                "y": 9
              },
              {
                "x": -2,
                "y": 8
              },
              {
                "x": -3,
                "y": 9
              },
              {
                "x": -3,
                "y": 7
              },
              {
                "x": -2,
                "y": 9
              },
              {
                "x": -4,
                "y": 7
              }
            ],
            "x": -3,
            "y": 8
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 6
              },
              {
                "x": -2,
                "y": 8
              },
              {
                "x": -1,
                "y": 7
              },
              {
                "x": -3,
                "y": 7
              },
              {
                "x": -2,
                "y": 6
              },
              {
                "x": -1,
                "y": 8
              },
              {
                "x": -1,
                "y": 6
              }
            ],
            "x": -2,
            "y": 7
          },
          {
            "edges": [
              {
                "x": 1,
                "y": -15
              },
              {
                "x": 3,
                "y": -15
              },
              {
                "x": 2,
                "y": -15
              },
              {
                "x": 3,
                "y": -16
              },
              {
                "x": 4,
                "y": -16
              }
            ],
            "x": 2,
            "y": -16
          },
          {
            "edges": [
              {
                "x": 0,
                "y": -15
              },
              {
                "x": -1,
                "y": -16
              },
              {
                "x": -1,
                "y": -14
              },
              {
                "x": 0,
                "y": -14
              },
              {
                "x": -2,
                "y": -14
              },
              {
                "x": -3,
                "y": -16
              }
            ],
            "x": -1,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 6,
                "y": -2
              },
              {
                "x": 8,
                "y": -1
              },
              {
                "x": 8,
                "y": -2
              },
              {
                "x": 6,
                "y": -1
              },
              {
                "x": 7,
                "y": 0
              },
              {
                "x": 7,
                "y": 1
              },
              {
                "x": 6,
                "y": 0
              }
            ],
            "x": 7,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 6
              },
              {
                "x": -10,
                "y": 5
              },
              {
                "x": -9,
                "y": 7
              },
              {
                "x": -10,
                "y": 8
              },
              {
                "x": -11,
                "y": 7
              },
              {
                "x": -9,
                "y": 8
              },
              {
                "x": -10,
                "y": 9
              }
            ],
            "x": -10,
            "y": 7
          },
          {
            "edges": [
              {
                "x": -10,
                "y": -10
              },
              {
                "x": -11,
                "y": -11
              },
              {
                "x": -9,
                "y": -10
              },
              {
                "x": -12,
                "y": -11
              },
              {
                "x": -10,
                "y": -9
              }
            ],
            "x": -10,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -15
              },
              {
                "x": 2,
                "y": -15
              },
              {
                "x": 2,
                "y": -14
              },
              {
                "x": 4,
                "y": -14
              },
              {
                "x": 4,
                "y": -15
              },
              {
                "x": 3,
                "y": -12
              },
              {
                "x": 4,
                "y": -13
              },
              {
                "x": 2,
                "y": -13
              }
            ],
            "x": 3,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 2,
                "y": 4
              },
              {
                "x": 0,
                "y": 3
              },
              {
                "x": 1,
                "y": 4
              },
              {
                "x": 2,
                "y": 2
              },
              {
                "x": 0,
                "y": 4
              }
            ],
            "x": 1,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -14
              },
              {
                "x": -13,
                "y": -13
              },
              {
                "x": -12,
                "y": -15
              },
              {
                "x": -11,
                "y": -14
              },
              {
                "x": -10,
                "y": -14
              },
              {
                "x": -12,
                "y": -16
              }
            ],
            "x": -12,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 3
              },
              {
                "x": 5,
                "y": 3
              },
              {
                "x": 3,
                "y": 4
              },
              {
                "x": 3,
                "y": 2
              },
              {
                "x": 5,
                "y": 4
              }
            ],
            "x": 4,
            "y": 3
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -1
              },
              {
                "x": 8,
                "y": -1
              },
              {
                "x": 9,
                "y": 0
              },
              {
                "x": 9,
                "y": -2
              },
              {
                "x": 8,
                "y": -2
              },
              {
                "x": 10,
                "y": 0
              }
            ],
            "x": 9,
            "y": -1
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 0
              },
              {
                "x": 2,
                "y": -3
              },
              {
                "x": 1,
                "y": -4
              },
              {
                "x": 2,
                "y": -2
              },
              {
                "x": 0,
                "y": -2
              },
              {
                "x": 0,
                "y": -1
              },
              {
                "x": 2,
                "y": -1
              }
            ],
            "x": 1,
            "y": -2
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 10
              },
              {
                "x": 12,
                "y": 10
              },
              {
                "x": 13,
                "y": 11
              },
              {
                "x": 14,
                "y": 11
              },
              {
                "x": 12,
                "y": 11
              },
              {
                "x": 14,
                "y": 9
              }
            ],
            "x": 13,
            "y": 10
          },
          {
            "edges": [
              {
                "x": 12,
                "y": -12
              },
              {
                "x": 13,
                "y": -11
              },
              {
                "x": 12,
                "y": -11
              },
              {
                "x": 12,
                "y": -13
              },
              {
                "x": 14,
                "y": -11
              },
              {
                "x": 15,
                "y": -12
              },
              {
                "x": 15,
                "y": -13
              }
            ],
            "x": 13,
            "y": -12
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 11
              },
              {
                "x": -2,
                "y": 10
              },
              {
                "x": -3,
                "y": 11
              },
              {
                "x": -3,
                "y": 10
              },
              {
                "x": -1,
                "y": 10
              },
              {
                "x": -1,
                "y": 12
              }
            ],
            "x": -2,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 6,
                "y": -2
              },
              {
                "x": 6,
                "y": -1
              },
              {
                "x": 5,
                "y": 0
              },
              {
                "x": 5,
                "y": -2
              },
              {
                "x": 6,
                "y": 0
              },
              {
                "x": 4,
                "y": 0
              },
              {
                "x": 4,
                "y": -2
              },
              {
                "x": 5,
                "y": 1
              }
            ],
            "x": 5,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 8
              },
              {
                "x": -2,
                "y": 8
              },
              {
                "x": -2,
                "y": 7
              },
              {
                "x": -1,
                "y": 6
              },
              {
                "x": 0,
                "y": 7
              },
              {
                "x": 0,
                "y": 8
              },
              {
                "x": 0,
                "y": 6
              },
              {
                "x": -2,
                "y": 6
              }
            ],
            "x": -1,
            "y": 7
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 2
              },
              {
                "x": 14,
                "y": 4
              },
              {
                "x": 14,
                "y": 3
              },
              {
                "x": 13,
                "y": 1
              },
              {
                "x": 15,
                "y": 3
              },
              {
                "x": 15,
                "y": 1
              },
              {
                "x": 12,
                "y": 2
              }
            ],
            "x": 14,
            "y": 2
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 15
              },
              {
                "x": 1,
                "y": 14
              },
              {
                "x": 2,
                "y": 15
              },
              {
                "x": 2,
                "y": 14
              },
              {
                "x": 0,
                "y": 14
              }
            ],
            "x": 1,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 5,
                "y": -12
              },
              {
                "x": 7,
                "y": -12
              },
              {
                "x": 7,
                "y": -11
              },
              {
                "x": 8,
                "y": -12
              },
              {
                "x": 6,
                "y": -10
              }
            ],
            "x": 6,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 4,
                "y": -3
              },
              {
                "x": 3,
                "y": -4
              },
              {
                "x": 3,
                "y": -5
              },
              {
                "x": 4,
                "y": -6
              },
              {
                "x": 4,
                "y": -2
              }
            ],
            "x": 4,
            "y": -4
          },
          {
            "edges": [
              {
                "x": -4,
                "y": 9
              },
              {
                "x": -4,
                "y": 11
              },
              {
                "x": -5,
                "y": 9
              },
              {
                "x": -3,
                "y": 10
              },
              {
                "x": -5,
                "y": 10
              },
              {
                "x": -3,
                "y": 11
              }
            ],
            "x": -4,
            "y": 10
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 11
              },
              {
                "x": -15,
                "y": 12
              },
              {
                "x": -14,
                "y": 13
              },
              {
                "x": -14,
                "y": 11
              },
              {
                "x": -15,
                "y": 13
              },
              {
                "x": -13,
                "y": 13
              },
              {
                "x": -15,
                "y": 11
              }
            ],
            "x": -14,
            "y": 12
          },
          {
            "edges": [
              {
                "x": -2,
                "y": -4
              },
              {
                "x": -1,
                "y": -6
              },
              {
                "x": -3,
                "y": -4
              },
              {
                "x": -1,
                "y": -4
              },
              {
                "x": -3,
                "y": -6
              }
            ],
            "x": -2,
            "y": -5
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -6
              },
              {
                "x": 12,
                "y": -4
              },
              {
                "x": 11,
                "y": -5
              },
              {
                "x": 13,
                "y": -4
              },
              {
                "x": 10,
                "y": -5
              }
            ],
            "x": 12,
            "y": -5
          },
          {
            "edges": [
              {
                "x": 4,
                "y": 10
              },
              {
                "x": 3,
                "y": 12
              },
              {
                "x": 2,
                "y": 11
              },
              {
                "x": 2,
                "y": 10
              },
              {
                "x": 4,
                "y": 12
              }
            ],
            "x": 3,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -4,
                "y": 9
              },
              {
                "x": -2,
                "y": 11
              },
              {
                "x": -4,
                "y": 10
              },
              {
                "x": -3,
                "y": 9
              },
              {
                "x": -2,
                "y": 10
              },
              {
                "x": -3,
                "y": 11
              }
            ],
            "x": -3,
            "y": 10
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 11
              },
              {
                "x": -12,
                "y": 10
              },
              {
                "x": -11,
                "y": 10
              },
              {
                "x": -10,
                "y": 11
              },
              {
                "x": -10,
                "y": 12
              },
              {
                "x": -10,
                "y": 10
              },
              {
                "x": -11,
                "y": 13
              }
            ],
            "x": -11,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 6
              },
              {
                "x": -3,
                "y": 7
              },
              {
                "x": -3,
                "y": 8
              },
              {
                "x": -5,
                "y": 6
              },
              {
                "x": -4,
                "y": 9
              },
              {
                "x": -4,
                "y": 5
              },
              {
                "x": -6,
                "y": 7
              }
            ],
            "x": -4,
            "y": 7
          },
          {
            "edges": [
              {
                "x": -7,
                "y": 8
              },
              {
                "x": -9,
                "y": 8
              },
              {
                "x": -10,
                "y": 9
              },
              {
                "x": -8,
                "y": 11
              },
              {
                "x": -7,
                "y": 11
              },
              {
                "x": -7,
                "y": 7
              }
            ],
            "x": -8,
            "y": 9
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 11
              },
              {
                "x": 7,
                "y": 14
              },
              {
                "x": 7,
                "y": 11
              },
              {
                "x": 7,
                "y": 12
              },
              {
                "x": 8,
                "y": 13
              },
              {
                "x": 8,
                "y": 11
              },
              {
                "x": 9,
                "y": 12
              },
              {
                "x": 6,
                "y": 12
              }
            ],
            "x": 8,
            "y": 12
          },
          {
            "edges": [
              {
                "x": -4,
                "y": 9
              },
              {
                "x": -2,
                "y": 9
              },
              {
                "x": -5,
                "y": 9
              },
              {
                "x": -3,
                "y": 8
              },
              {
                "x": -3,
                "y": 10
              },
              {
                "x": -2,
                "y": 8
              },
              {
                "x": -2,
                "y": 10
              }
            ],
            "x": -3,
            "y": 9
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 0
              },
              {
                "x": 3,
                "y": -2
              },
              {
                "x": 2,
                "y": -1
              },
              {
                "x": 2,
                "y": -2
              },
              {
                "x": 4,
                "y": 0
              },
              {
                "x": 4,
                "y": -2
              }
            ],
            "x": 3,
            "y": -1
          },
          {
            "edges": [
              {
                "x": 0,
                "y": 10
              },
              {
                "x": 0,
                "y": 12
              },
              {
                "x": -2,
                "y": 11
              },
              {
                "x": -1,
                "y": 10
              },
              {
                "x": -1,
                "y": 12
              },
              {
                "x": 0,
                "y": 11
              }
            ],
            "x": -1,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -11
              },
              {
                "x": 2,
                "y": -12
              },
              {
                "x": 4,
                "y": -13
              },
              {
                "x": 2,
                "y": -13
              },
              {
                "x": 3,
                "y": -14
              },
              {
                "x": 5,
                "y": -12
              }
            ],
            "x": 3,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 6,
                "y": -2
              },
              {
                "x": 7,
                "y": -1
              },
              {
                "x": 5,
                "y": -1
              },
              {
                "x": 6,
                "y": 0
              },
              {
                "x": 7,
                "y": 0
              },
              {
                "x": 6,
                "y": -3
              },
              {
                "x": 5,
                "y": -2
              }
            ],
            "x": 6,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 3
              },
              {
                "x": -6,
                "y": 4
              },
              {
                "x": -6,
                "y": 6
              },
              {
                "x": -5,
                "y": 6
              },
              {
                "x": -4,
                "y": 5
              },
              {
                "x": -8,
                "y": 5
              }
            ],
            "x": -6,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 13
              },
              {
                "x": 14,
                "y": 12
              },
              {
                "x": 13,
                "y": 13
              },
              {
                "x": 13,
                "y": 11
              },
              {
                "x": 12,
                "y": 12
              },
              {
                "x": 15,
                "y": 12
              }
            ],
            "x": 13,
            "y": 12
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 7
              },
              {
                "x": -1,
                "y": 5
              },
              {
                "x": 0,
                "y": 6
              },
              {
                "x": -2,
                "y": 6
              },
              {
                "x": -2,
                "y": 7
              },
              {
                "x": 0,
                "y": 7
              },
              {
                "x": 0,
                "y": 5
              },
              {
                "x": -2,
                "y": 5
              }
            ],
            "x": -1,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 1
              },
              {
                "x": -2,
                "y": 0
              },
              {
                "x": -4,
                "y": 0
              },
              {
                "x": -2,
                "y": 1
              },
              {
                "x": -4,
                "y": 1
              },
              {
                "x": -3,
                "y": -2
              }
            ],
            "x": -3,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -8,
                "y": 9
              },
              {
                "x": -7,
                "y": 7
              },
              {
                "x": -6,
                "y": 7
              },
              {
                "x": -9,
                "y": 8
              },
              {
                "x": -6,
                "y": 6
              }
            ],
            "x": -7,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 7
              },
              {
                "x": 15,
                "y": 9
              },
              {
                "x": 13,
                "y": 8
              },
              {
                "x": 14,
                "y": 9
              },
              {
                "x": 14,
                "y": 10
              },
              {
                "x": 15,
                "y": 6
              }
            ],
            "x": 14,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 8
              },
              {
                "x": 9,
                "y": 9
              },
              {
                "x": 11,
                "y": 8
              },
              {
                "x": 10,
                "y": 9
              },
              {
                "x": 10,
                "y": 7
              },
              {
                "x": 11,
                "y": 7
              },
              {
                "x": 11,
                "y": 9
              }
            ],
            "x": 10,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 4,
                "y": -10
              },
              {
                "x": 3,
                "y": -12
              },
              {
                "x": 2,
                "y": -12
              },
              {
                "x": 2,
                "y": -10
              },
              {
                "x": 1,
                "y": -11
              }
            ],
            "x": 3,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 12,
                "y": -12
              },
              {
                "x": 11,
                "y": -12
              },
              {
                "x": 13,
                "y": -11
              },
              {
                "x": 13,
                "y": -12
              },
              {
                "x": 12,
                "y": -10
              },
              {
                "x": 11,
                "y": -11
              },
              {
                "x": 11,
                "y": -10
              }
            ],
            "x": 12,
            "y": -11
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -10
              },
              {
                "x": -5,
                "y": -11
              },
              {
                "x": -7,
                "y": -11
              },
              {
                "x": -6,
                "y": -12
              },
              {
                "x": -6,
                "y": -13
              }
            ],
            "x": -6,
            "y": -11
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 1
              },
              {
                "x": -13,
                "y": -1
              },
              {
                "x": -11,
                "y": 0
              },
              {
                "x": -12,
                "y": 0
              },
              {
                "x": -14,
                "y": 0
              },
              {
                "x": -12,
                "y": -1
              },
              {
                "x": -14,
                "y": 1
              },
              {
                "x": -14,
                "y": -1
              }
            ],
            "x": -13,
            "y": 0
          },
          {
            "edges": [
              {
                "x": 0,
                "y": 13
              },
              {
                "x": 2,
                "y": 13
              },
              {
                "x": 1,
                "y": 14
              },
              {
                "x": 1,
                "y": 12
              },
              {
                "x": 0,
                "y": 12
              },
              {
                "x": 0,
                "y": 14
              }
            ],
            "x": 1,
            "y": 13
          },
          {
            "edges": [
              {
                "x": 5,
                "y": -7
              },
              {
                "x": 5,
                "y": -6
              },
              {
                "x": 4,
                "y": -4
              },
              {
                "x": 4,
                "y": -7
              },
              {
                "x": 3,
                "y": -5
              },
              {
                "x": 4,
                "y": -8
              },
              {
                "x": 6,
                "y": -6
              }
            ],
            "x": 4,
            "y": -6
          },
          {
            "edges": [
              {
                "x": -10,
                "y": -15
              },
              {
                "x": -12,
                "y": -14
              },
              {
                "x": -10,
                "y": -13
              },
              {
                "x": -11,
                "y": -14
              },
              {
                "x": -9,
                "y": -15
              },
              {
                "x": -9,
                "y": -13
              },
              {
                "x": -10,
                "y": -16
              }
            ],
            "x": -10,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -9
              },
              {
                "x": 14,
                "y": -9
              },
              {
                "x": 14,
                "y": -10
              },
              {
                "x": 14,
                "y": -11
              },
              {
                "x": 15,
                "y": -12
              }
            ],
            "x": 15,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -14
              },
              {
                "x": 5,
                "y": -15
              },
              {
                "x": 4,
                "y": -14
              },
              {
                "x": 4,
                "y": -15
              },
              {
                "x": 4,
                "y": -13
              },
              {
                "x": 5,
                "y": -12
              }
            ],
            "x": 5,
            "y": -14
          },
          {
            "edges": [
              {
                "x": -14,
                "y": -12
              },
              {
                "x": -15,
                "y": -11
              },
              {
                "x": -14,
                "y": -10
              },
              {
                "x": -13,
                "y": -11
              },
              {
                "x": -15,
                "y": -10
              }
            ],
            "x": -14,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 15
              },
              {
                "x": 3,
                "y": 12
              },
              {
                "x": 2,
                "y": 13
              },
              {
                "x": 4,
                "y": 14
              },
              {
                "x": 4,
                "y": 12
              },
              {
                "x": 2,
                "y": 14
              },
              {
                "x": 5,
                "y": 15
              }
            ],
            "x": 3,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -4,
                "y": -6
              },
              {
                "x": -5,
                "y": -8
              },
              {
                "x": -3,
                "y": -8
              },
              {
                "x": -5,
                "y": -7
              },
              {
                "x": -3,
                "y": -7
              },
              {
                "x": -3,
                "y": -6
              }
            ],
            "x": -4,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 0
              },
              {
                "x": -11,
                "y": 0
              },
              {
                "x": -10,
                "y": -2
              },
              {
                "x": -9,
                "y": -1
              },
              {
                "x": -9,
                "y": -2
              },
              {
                "x": -11,
                "y": -2
              }
            ],
            "x": -10,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -7,
                "y": 11
              },
              {
                "x": -10,
                "y": 11
              },
              {
                "x": -8,
                "y": 11
              },
              {
                "x": -10,
                "y": 12
              },
              {
                "x": -10,
                "y": 10
              },
              {
                "x": -8,
                "y": 12
              }
            ],
            "x": -9,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 14
              },
              {
                "x": 0,
                "y": 12
              },
              {
                "x": 1,
                "y": 13
              },
              {
                "x": -1,
                "y": 13
              },
              {
                "x": 0,
                "y": 14
              },
              {
                "x": 1,
                "y": 14
              },
              {
                "x": -1,
                "y": 12
              },
              {
                "x": 1,
                "y": 12
              }
            ],
            "x": 0,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -16,
                "y": -8
              },
              {
                "x": -16,
                "y": -5
              },
              {
                "x": -16,
                "y": -4
              },
              {
                "x": -14,
                "y": -6
              },
              {
                "x": -14,
                "y": -7
              }
            ],
            "x": -16,
            "y": -6
          },
          {
            "edges": [
              {
                "x": 6,
                "y": -12
              },
              {
                "x": 7,
                "y": -12
              },
              {
                "x": 8,
                "y": -12
              },
              {
                "x": 6,
                "y": -10
              },
              {
                "x": 7,
                "y": -9
              }
            ],
            "x": 7,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 6,
                "y": -12
              },
              {
                "x": 7,
                "y": -11
              },
              {
                "x": 9,
                "y": -12
              },
              {
                "x": 8,
                "y": -13
              },
              {
                "x": 7,
                "y": -12
              },
              {
                "x": 9,
                "y": -11
              }
            ],
            "x": 8,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 2
              },
              {
                "x": 14,
                "y": 2
              },
              {
                "x": 13,
                "y": 0
              },
              {
                "x": 12,
                "y": 2
              },
              {
                "x": 12,
                "y": 0
              },
              {
                "x": 15,
                "y": 1
              },
              {
                "x": 14,
                "y": 0
              }
            ],
            "x": 13,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 8
              },
              {
                "x": 8,
                "y": 7
              },
              {
                "x": 9,
                "y": 9
              },
              {
                "x": 7,
                "y": 8
              },
              {
                "x": 8,
                "y": 9
              },
              {
                "x": 7,
                "y": 9
              }
            ],
            "x": 8,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 14
              },
              {
                "x": 7,
                "y": 11
              },
              {
                "x": 7,
                "y": 12
              },
              {
                "x": 5,
                "y": 12
              },
              {
                "x": 6,
                "y": 11
              },
              {
                "x": 8,
                "y": 12
              }
            ],
            "x": 6,
            "y": 12
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -10
              },
              {
                "x": -6,
                "y": -11
              },
              {
                "x": -6,
                "y": -12
              },
              {
                "x": -5,
                "y": -11
              },
              {
                "x": -7,
                "y": -9
              }
            ],
            "x": -7,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 11,
                "y": 6
              },
              {
                "x": 11,
                "y": 5
              },
              {
                "x": 10,
                "y": 5
              },
              {
                "x": 9,
                "y": 6
              },
              {
                "x": 10,
                "y": 7
              },
              {
                "x": 11,
                "y": 7
              },
              {
                "x": 9,
                "y": 5
              }
            ],
            "x": 10,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -9
              },
              {
                "x": -12,
                "y": -7
              },
              {
                "x": -11,
                "y": -8
              },
              {
                "x": -13,
                "y": -8
              },
              {
                "x": -13,
                "y": -7
              }
            ],
            "x": -12,
            "y": -8
          },
          {
            "edges": [
              {
                "x": 8,
                "y": 7
              },
              {
                "x": 6,
                "y": 6
              },
              {
                "x": 8,
                "y": 6
              },
              {
                "x": 8,
                "y": 5
              },
              {
                "x": 6,
                "y": 7
              },
              {
                "x": 6,
                "y": 5
              }
            ],
            "x": 7,
            "y": 6
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -16
              },
              {
                "x": 15,
                "y": -14
              },
              {
                "x": 14,
                "y": -16
              },
              {
                "x": 15,
                "y": -13
              },
              {
                "x": 13,
                "y": -14
              }
            ],
            "x": 15,
            "y": -15
          },
          {
            "edges": [
              {
                "x": -6,
                "y": -14
              },
              {
                "x": -5,
                "y": -14
              },
              {
                "x": -6,
                "y": -13
              },
              {
                "x": -6,
                "y": -12
              },
              {
                "x": -4,
                "y": -14
              }
            ],
            "x": -5,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -12
              },
              {
                "x": 3,
                "y": -11
              },
              {
                "x": 2,
                "y": -13
              },
              {
                "x": 1,
                "y": -11
              },
              {
                "x": 0,
                "y": -12
              }
            ],
            "x": 2,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 2,
                "y": 4
              },
              {
                "x": 2,
                "y": 5
              },
              {
                "x": 3,
                "y": 5
              },
              {
                "x": 4,
                "y": 3
              },
              {
                "x": 3,
                "y": 3
              },
              {
                "x": 3,
                "y": 2
              },
              {
                "x": 4,
                "y": 5
              }
            ],
            "x": 3,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -10
              },
              {
                "x": 1,
                "y": -9
              },
              {
                "x": 0,
                "y": -8
              },
              {
                "x": 0,
                "y": -10
              },
              {
                "x": -1,
                "y": -9
              },
              {
                "x": -1,
                "y": -8
              }
            ],
            "x": 0,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -10
              },
              {
                "x": -3,
                "y": -10
              },
              {
                "x": -2,
                "y": -9
              },
              {
                "x": -3,
                "y": -9
              },
              {
                "x": -1,
                "y": -11
              },
              {
                "x": -1,
                "y": -9
              }
            ],
            "x": -2,
            "y": -10
          },
          {
            "edges": [
              {
                "x": -9,
                "y": -16
              },
              {
                "x": -10,
                "y": -15
              },
              {
                "x": -8,
                "y": -15
              },
              {
                "x": -10,
                "y": -14
              },
              {
                "x": -8,
                "y": -16
              },
              {
                "x": -8,
                "y": -14
              },
              {
                "x": -10,
                "y": -16
              },
              {
                "x": -9,
                "y": -13
              }
            ],
            "x": -9,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 5,
                "y": -7
              },
              {
                "x": 4,
                "y": -8
              },
              {
                "x": 5,
                "y": -9
              },
              {
                "x": 6,
                "y": -8
              },
              {
                "x": 4,
                "y": -7
              },
              {
                "x": 6,
                "y": -9
              },
              {
                "x": 5,
                "y": -10
              }
            ],
            "x": 5,
            "y": -8
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 5
              },
              {
                "x": 13,
                "y": 2
              },
              {
                "x": 14,
                "y": 4
              },
              {
                "x": 14,
                "y": 2
              },
              {
                "x": 15,
                "y": 3
              }
            ],
            "x": 14,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 13
              },
              {
                "x": -11,
                "y": 11
              },
              {
                "x": -9,
                "y": 11
              },
              {
                "x": -10,
                "y": 11
              },
              {
                "x": -11,
                "y": 13
              }
            ],
            "x": -10,
            "y": 12
          },
          {
            "edges": [
              {
                "x": -4,
                "y": -10
              },
              {
                "x": -2,
                "y": -10
              },
              {
                "x": -3,
                "y": -9
              },
              {
                "x": -4,
                "y": -9
              },
              {
                "x": -2,
                "y": -9
              },
              {
                "x": -4,
                "y": -11
              }
            ],
            "x": -3,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 13,
                "y": -11
              },
              {
                "x": 12,
                "y": -11
              },
              {
                "x": 11,
                "y": -10
              },
              {
                "x": 13,
                "y": -9
              },
              {
                "x": 11,
                "y": -11
              }
            ],
            "x": 12,
            "y": -10
          },
          {
            "edges": [
              {
                "x": -14,
                "y": -7
              },
              {
                "x": -12,
                "y": -9
              },
              {
                "x": -12,
                "y": -8
              },
              {
                "x": -13,
                "y": -7
              },
              {
                "x": -13,
                "y": -6
              },
              {
                "x": -11,
                "y": -8
              },
              {
                "x": -13,
                "y": -8
              },
              {
                "x": -11,
                "y": -6
              }
            ],
            "x": -12,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -9
              },
              {
                "x": -12,
                "y": -8
              },
              {
                "x": -12,
                "y": -7
              },
              {
                "x": -10,
                "y": -7
              },
              {
                "x": -10,
                "y": -9
              }
            ],
            "x": -11,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -11
              },
              {
                "x": -6,
                "y": -13
              },
              {
                "x": -6,
                "y": -11
              },
              {
                "x": -7,
                "y": -11
              },
              {
                "x": -5,
                "y": -13
              }
            ],
            "x": -6,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 0,
                "y": 10
              },
              {
                "x": -2,
                "y": 11
              },
              {
                "x": -1,
                "y": 11
              },
              {
                "x": -2,
                "y": 10
              },
              {
                "x": -1,
                "y": 9
              },
              {
                "x": -2,
                "y": 9
              }
            ],
            "x": -1,
            "y": 10
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -6
              },
              {
                "x": 7,
                "y": -8
              },
              {
                "x": 6,
                "y": -6
              },
              {
                "x": 8,
                "y": -8
              },
              {
                "x": 6,
                "y": -8
              },
              {
                "x": 9,
                "y": -7
              }
            ],
            "x": 7,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 6
              },
              {
                "x": -6,
                "y": 5
              },
              {
                "x": -4,
                "y": 4
              },
              {
                "x": -3,
                "y": 4
              },
              {
                "x": -5,
                "y": 6
              },
              {
                "x": -4,
                "y": 7
              }
            ],
            "x": -4,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 10
              },
              {
                "x": 3,
                "y": 11
              },
              {
                "x": 2,
                "y": 11
              },
              {
                "x": 1,
                "y": 11
              },
              {
                "x": 3,
                "y": 9
              }
            ],
            "x": 2,
            "y": 10
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 2
              },
              {
                "x": 9,
                "y": 4
              },
              {
                "x": 10,
                "y": 4
              },
              {
                "x": 10,
                "y": 2
              },
              {
                "x": 9,
                "y": 5
              },
              {
                "x": 7,
                "y": 3
              }
            ],
            "x": 9,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -15,
                "y": -2
              },
              {
                "x": -14,
                "y": -3
              },
              {
                "x": -14,
                "y": -4
              },
              {
                "x": -16,
                "y": -4
              },
              {
                "x": -16,
                "y": -5
              },
              {
                "x": -14,
                "y": -5
              }
            ],
            "x": -15,
            "y": -4
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 12
              },
              {
                "x": 1,
                "y": 13
              },
              {
                "x": 3,
                "y": 13
              },
              {
                "x": 2,
                "y": 14
              },
              {
                "x": 1,
                "y": 14
              },
              {
                "x": 2,
                "y": 15
              },
              {
                "x": 1,
                "y": 12
              }
            ],
            "x": 2,
            "y": 13
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -14
              },
              {
                "x": 15,
                "y": -10
              },
              {
                "x": 15,
                "y": -13
              },
              {
                "x": 14,
                "y": -11
              },
              {
                "x": 13,
                "y": -12
              }
            ],
            "x": 15,
            "y": -12
          },
          {
            "edges": [
              {
                "x": -7,
                "y": 1
              },
              {
                "x": -7,
                "y": 0
              },
              {
                "x": -5,
                "y": 1
              },
              {
                "x": -6,
                "y": 2
              },
              {
                "x": -5,
                "y": 2
              }
            ],
            "x": -6,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 14,
                "y": -8
              },
              {
                "x": 15,
                "y": -9
              },
              {
                "x": 15,
                "y": -7
              },
              {
                "x": 14,
                "y": -9
              },
              {
                "x": 14,
                "y": -7
              }
            ],
            "x": 15,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 14
              },
              {
                "x": -7,
                "y": 15
              },
              {
                "x": -4,
                "y": 15
              },
              {
                "x": -6,
                "y": 14
              },
              {
                "x": -4,
                "y": 14
              },
              {
                "x": -3,
                "y": 15
              }
            ],
            "x": -5,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -5
              },
              {
                "x": -12,
                "y": -4
              },
              {
                "x": -13,
                "y": -3
              },
              {
                "x": -12,
                "y": -3
              },
              {
                "x": -14,
                "y": -3
              },
              {
                "x": -14,
                "y": -4
              },
              {
                "x": -13,
                "y": -5
              }
            ],
            "x": -13,
            "y": -4
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 15
              },
              {
                "x": 1,
                "y": 13
              },
              {
                "x": 2,
                "y": 13
              },
              {
                "x": 2,
                "y": 14
              },
              {
                "x": 0,
                "y": 14
              },
              {
                "x": 0,
                "y": 13
              },
              {
                "x": 2,
                "y": 15
              }
            ],
            "x": 1,
            "y": 14
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -6
              },
              {
                "x": 12,
                "y": -8
              },
              {
                "x": 12,
                "y": -7
              },
              {
                "x": 11,
                "y": -8
              },
              {
                "x": 10,
                "y": -7
              }
            ],
            "x": 11,
            "y": -7
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 5
              },
              {
                "x": 13,
                "y": 7
              },
              {
                "x": 14,
                "y": 4
              },
              {
                "x": 14,
                "y": 8
              },
              {
                "x": 13,
                "y": 5
              }
            ],
            "x": 15,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 6
              },
              {
                "x": -10,
                "y": 7
              },
              {
                "x": -9,
                "y": 8
              },
              {
                "x": -10,
                "y": 8
              },
              {
                "x": -7,
                "y": 7
              },
              {
                "x": -11,
                "y": 7
              }
            ],
            "x": -9,
            "y": 7
          },
          {
            "edges": [
              {
                "x": 13,
                "y": -1
              },
              {
                "x": 15,
                "y": -1
              },
              {
                "x": 14,
                "y": 0
              },
              {
                "x": 13,
                "y": 0
              },
              {
                "x": 15,
                "y": 0
              },
              {
                "x": 13,
                "y": -2
              }
            ],
            "x": 14,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 8
              },
              {
                "x": 0,
                "y": 7
              },
              {
                "x": 0,
                "y": 9
              },
              {
                "x": -1,
                "y": 7
              },
              {
                "x": -1,
                "y": 9
              }
            ],
            "x": 0,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 15
              },
              {
                "x": 10,
                "y": 14
              },
              {
                "x": 7,
                "y": 15
              },
              {
                "x": 11,
                "y": 15
              },
              {
                "x": 10,
                "y": 13
              }
            ],
            "x": 9,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 12,
                "y": 14
              },
              {
                "x": 11,
                "y": 13
              },
              {
                "x": 13,
                "y": 13
              },
              {
                "x": 12,
                "y": 12
              },
              {
                "x": 13,
                "y": 14
              }
            ],
            "x": 12,
            "y": 13
          },
          {
            "edges": [
              {
                "x": 2,
                "y": 5
              },
              {
                "x": 3,
                "y": 7
              },
              {
                "x": 4,
                "y": 6
              },
              {
                "x": 3,
                "y": 5
              },
              {
                "x": 4,
                "y": 5
              }
            ],
            "x": 3,
            "y": 6
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 0
              },
              {
                "x": 2,
                "y": 2
              },
              {
                "x": 3,
                "y": 2
              },
              {
                "x": 3,
                "y": 0
              },
              {
                "x": 2,
                "y": -1
              }
            ],
            "x": 2,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 6,
                "y": 1
              },
              {
                "x": 7,
                "y": 0
              },
              {
                "x": 6,
                "y": 0
              },
              {
                "x": 7,
                "y": -1
              },
              {
                "x": 7,
                "y": 3
              }
            ],
            "x": 7,
            "y": 1
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -1
              },
              {
                "x": -10,
                "y": -2
              },
              {
                "x": -10,
                "y": -1
              },
              {
                "x": -9,
                "y": -3
              },
              {
                "x": -9,
                "y": -1
              },
              {
                "x": -10,
                "y": -3
              },
              {
                "x": -8,
                "y": -4
              },
              {
                "x": -8,
                "y": -3
              },
              {
                "x": -9,
                "y": -4
              }
            ],
            "x": -9,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -12,
                "y": 9
              },
              {
                "x": -11,
                "y": 7
              },
              {
                "x": -13,
                "y": 9
              },
              {
                "x": -12,
                "y": 10
              },
              {
                "x": -14,
                "y": 8
              }
            ],
            "x": -12,
            "y": 8
          },
          {
            "edges": [
              {
                "x": -12,
                "y": 14
              },
              {
                "x": -13,
                "y": 13
              },
              {
                "x": -14,
                "y": 14
              },
              {
                "x": -13,
                "y": 15
              },
              {
                "x": -14,
                "y": 13
              },
              {
                "x": -12,
                "y": 15
              }
            ],
            "x": -13,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -1
              },
              {
                "x": -11,
                "y": 0
              },
              {
                "x": -13,
                "y": 0
              },
              {
                "x": -12,
                "y": 0
              },
              {
                "x": -12,
                "y": -2
              }
            ],
            "x": -12,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -2,
                "y": 1
              },
              {
                "x": -3,
                "y": 1
              },
              {
                "x": -1,
                "y": 0
              },
              {
                "x": -1,
                "y": 1
              },
              {
                "x": -3,
                "y": 0
              },
              {
                "x": -1,
                "y": -1
              },
              {
                "x": -4,
                "y": 0
              }
            ],
            "x": -2,
            "y": 0
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -16
              },
              {
                "x": 4,
                "y": -15
              },
              {
                "x": 3,
                "y": -16
              },
              {
                "x": 3,
                "y": -15
              },
              {
                "x": 5,
                "y": -15
              },
              {
                "x": 6,
                "y": -16
              }
            ],
            "x": 4,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -3
              },
              {
                "x": -1,
                "y": -1
              },
              {
                "x": 0,
                "y": -2
              },
              {
                "x": 0,
                "y": -1
              },
              {
                "x": -2,
                "y": -3
              }
            ],
            "x": -1,
            "y": -2
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -3
              },
              {
                "x": 14,
                "y": -1
              },
              {
                "x": 15,
                "y": 0
              },
              {
                "x": 14,
                "y": 0
              },
              {
                "x": 13,
                "y": -1
              },
              {
                "x": 15,
                "y": 1
              }
            ],
            "x": 15,
            "y": -1
          },
          {
            "edges": [
              {
                "x": 8,
                "y": -3
              },
              {
                "x": 7,
                "y": -6
              },
              {
                "x": 6,
                "y": -3
              },
              {
                "x": 9,
                "y": -4
              },
              {
                "x": 6,
                "y": -2
              }
            ],
            "x": 7,
            "y": -4
          },
          {
            "edges": [
              {
                "x": 6,
                "y": 1
              },
              {
                "x": 8,
                "y": -1
              },
              {
                "x": 7,
                "y": -1
              },
              {
                "x": 6,
                "y": -1
              },
              {
                "x": 7,
                "y": 1
              },
              {
                "x": 6,
                "y": 0
              }
            ],
            "x": 7,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -11,
                "y": 10
              },
              {
                "x": -11,
                "y": 11
              },
              {
                "x": -9,
                "y": 11
              },
              {
                "x": -10,
                "y": 11
              },
              {
                "x": -10,
                "y": 9
              }
            ],
            "x": -10,
            "y": 10
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -12
              },
              {
                "x": 0,
                "y": -13
              },
              {
                "x": 2,
                "y": -12
              },
              {
                "x": -1,
                "y": -11
              },
              {
                "x": -1,
                "y": -13
              },
              {
                "x": 1,
                "y": -11
              }
            ],
            "x": 0,
            "y": -12
          },
          {
            "edges": [
              {
                "x": -11,
                "y": 4
              },
              {
                "x": -11,
                "y": 5
              },
              {
                "x": -12,
                "y": 4
              },
              {
                "x": -13,
                "y": 5
              },
              {
                "x": -13,
                "y": 4
              },
              {
                "x": -13,
                "y": 6
              }
            ],
            "x": -12,
            "y": 5
          },
          {
            "edges": [
              {
                "x": -3,
                "y": -8
              },
              {
                "x": -2,
                "y": -10
              },
              {
                "x": -3,
                "y": -10
              },
              {
                "x": -4,
                "y": -9
              },
              {
                "x": -2,
                "y": -9
              },
              {
                "x": -4,
                "y": -10
              }
            ],
            "x": -3,
            "y": -9
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -14
              },
              {
                "x": 11,
                "y": -12
              },
              {
                "x": 12,
                "y": -13
              },
              {
                "x": 10,
                "y": -13
              },
              {
                "x": 12,
                "y": -12
              },
              {
                "x": 12,
                "y": -14
              }
            ],
            "x": 11,
            "y": -13
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 2
              },
              {
                "x": -2,
                "y": 1
              },
              {
                "x": -2,
                "y": 3
              },
              {
                "x": -1,
                "y": 1
              },
              {
                "x": -1,
                "y": 2
              },
              {
                "x": -3,
                "y": 1
              },
              {
                "x": -3,
                "y": 3
              }
            ],
            "x": -2,
            "y": 2
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 11
              },
              {
                "x": 11,
                "y": 10
              },
              {
                "x": 10,
                "y": 12
              },
              {
                "x": 11,
                "y": 11
              },
              {
                "x": 11,
                "y": 12
              },
              {
                "x": 9,
                "y": 12
              }
            ],
            "x": 10,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 10
              },
              {
                "x": 2,
                "y": 10
              },
              {
                "x": 2,
                "y": 11
              },
              {
                "x": 0,
                "y": 11
              },
              {
                "x": 1,
                "y": 12
              },
              {
                "x": 0,
                "y": 10
              }
            ],
            "x": 1,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 12,
                "y": -8
              },
              {
                "x": 14,
                "y": -9
              },
              {
                "x": 12,
                "y": -10
              },
              {
                "x": 13,
                "y": -8
              },
              {
                "x": 14,
                "y": -8
              }
            ],
            "x": 13,
            "y": -9
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -14
              },
              {
                "x": 8,
                "y": -15
              },
              {
                "x": 8,
                "y": -13
              },
              {
                "x": 9,
                "y": -14
              },
              {
                "x": 7,
                "y": -15
              },
              {
                "x": 8,
                "y": -16
              }
            ],
            "x": 8,
            "y": -14
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -7
              },
              {
                "x": -1,
                "y": -6
              },
              {
                "x": 0,
                "y": -8
              },
              {
                "x": -1,
                "y": -9
              },
              {
                "x": 0,
                "y": -9
              },
              {
                "x": -2,
                "y": -9
              }
            ],
            "x": -1,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -2,
                "y": 3
              },
              {
                "x": -4,
                "y": 5
              },
              {
                "x": -4,
                "y": 4
              },
              {
                "x": -3,
                "y": 3
              },
              {
                "x": -2,
                "y": 4
              }
            ],
            "x": -3,
            "y": 4
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 2
              },
              {
                "x": 13,
                "y": 1
              },
              {
                "x": 11,
                "y": 2
              },
              {
                "x": 11,
                "y": 1
              },
              {
                "x": 14,
                "y": 2
              },
              {
                "x": 12,
                "y": 4
              },
              {
                "x": 10,
                "y": 2
              }
            ],
            "x": 12,
            "y": 2
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -4
              },
              {
                "x": -12,
                "y": -3
              },
              {
                "x": -10,
                "y": -2
              },
              {
                "x": -10,
                "y": -3
              },
              {
                "x": -11,
                "y": -2
              }
            ],
            "x": -11,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 3
              },
              {
                "x": -14,
                "y": 6
              },
              {
                "x": -15,
                "y": 6
              },
              {
                "x": -16,
                "y": 4
              },
              {
                "x": -16,
                "y": 6
              },
              {
                "x": -16,
                "y": 3
              }
            ],
            "x": -15,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 15,
                "y": 9
              },
              {
                "x": 13,
                "y": 10
              },
              {
                "x": 14,
                "y": 8
              },
              {
                "x": 14,
                "y": 11
              },
              {
                "x": 15,
                "y": 10
              },
              {
                "x": 14,
                "y": 9
              },
              {
                "x": 15,
                "y": 11
              }
            ],
            "x": 14,
            "y": 10
          },
          {
            "edges": [
              {
                "x": -6,
                "y": -5
              },
              {
                "x": -6,
                "y": -7
              },
              {
                "x": -5,
                "y": -7
              },
              {
                "x": -7,
                "y": -7
              },
              {
                "x": -5,
                "y": -5
              }
            ],
            "x": -6,
            "y": -6
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 0
              },
              {
                "x": -1,
                "y": -2
              },
              {
                "x": 0,
                "y": -1
              },
              {
                "x": -2,
                "y": 0
              },
              {
                "x": 0,
                "y": -2
              }
            ],
            "x": -1,
            "y": -1
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -14
              },
              {
                "x": 14,
                "y": -16
              },
              {
                "x": 12,
                "y": -14
              },
              {
                "x": 11,
                "y": -15
              },
              {
                "x": 13,
                "y": -14
              },
              {
                "x": 11,
                "y": -16
              }
            ],
            "x": 12,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -11
              },
              {
                "x": 8,
                "y": -12
              },
              {
                "x": 9,
                "y": -11
              },
              {
                "x": 8,
                "y": -13
              },
              {
                "x": 10,
                "y": -13
              }
            ],
            "x": 9,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 2
              },
              {
                "x": 13,
                "y": 2
              },
              {
                "x": 12,
                "y": 2
              },
              {
                "x": 11,
                "y": 1
              },
              {
                "x": 10,
                "y": 2
              }
            ],
            "x": 11,
            "y": 2
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 3
              },
              {
                "x": -13,
                "y": 3
              },
              {
                "x": -14,
                "y": 2
              },
              {
                "x": -13,
                "y": 4
              },
              {
                "x": -16,
                "y": 3
              },
              {
                "x": -16,
                "y": 4
              }
            ],
            "x": -14,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 14
              },
              {
                "x": -7,
                "y": 15
              },
              {
                "x": -5,
                "y": 15
              },
              {
                "x": -6,
                "y": 13
              },
              {
                "x": -8,
                "y": 14
              }
            ],
            "x": -6,
            "y": 14
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -9
              },
              {
                "x": 3,
                "y": -8
              },
              {
                "x": 1,
                "y": -7
              },
              {
                "x": 1,
                "y": -8
              },
              {
                "x": 2,
                "y": -7
              },
              {
                "x": 1,
                "y": -9
              }
            ],
            "x": 2,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 6
              },
              {
                "x": -1,
                "y": 4
              },
              {
                "x": 0,
                "y": 5
              },
              {
                "x": -2,
                "y": 5
              },
              {
                "x": 0,
                "y": 6
              },
              {
                "x": -2,
                "y": 4
              }
            ],
            "x": -1,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 11,
                "y": 5
              },
              {
                "x": 9,
                "y": 4
              },
              {
                "x": 9,
                "y": 3
              },
              {
                "x": 10,
                "y": 5
              },
              {
                "x": 9,
                "y": 5
              }
            ],
            "x": 10,
            "y": 4
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 7
              },
              {
                "x": 11,
                "y": 6
              },
              {
                "x": 11,
                "y": 8
              },
              {
                "x": 10,
                "y": 7
              },
              {
                "x": 10,
                "y": 8
              },
              {
                "x": 10,
                "y": 6
              },
              {
                "x": 12,
                "y": 8
              }
            ],
            "x": 11,
            "y": 7
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -3
              },
              {
                "x": -7,
                "y": -3
              },
              {
                "x": -6,
                "y": -3
              },
              {
                "x": -5,
                "y": -2
              },
              {
                "x": -7,
                "y": -2
              },
              {
                "x": -6,
                "y": -1
              },
              {
                "x": -4,
                "y": -2
              }
            ],
            "x": -6,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 15
              },
              {
                "x": -15,
                "y": 12
              },
              {
                "x": -15,
                "y": 13
              },
              {
                "x": -16,
                "y": 14
              },
              {
                "x": -15,
                "y": 14
              },
              {
                "x": -16,
                "y": 11
              }
            ],
            "x": -16,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 1
              },
              {
                "x": -15,
                "y": 3
              },
              {
                "x": -14,
                "y": 3
              },
              {
                "x": -16,
                "y": 4
              },
              {
                "x": -15,
                "y": 5
              }
            ],
            "x": -16,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -16,
                "y": -14
              },
              {
                "x": -16,
                "y": -13
              },
              {
                "x": -16,
                "y": -16
              },
              {
                "x": -15,
                "y": -16
              },
              {
                "x": -15,
                "y": -14
              }
            ],
            "x": -16,
            "y": -15
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -9
              },
              {
                "x": -10,
                "y": -11
              },
              {
                "x": -11,
                "y": -11
              },
              {
                "x": -13,
                "y": -11
              },
              {
                "x": -12,
                "y": -12
              },
              {
                "x": -13,
                "y": -12
              }
            ],
            "x": -12,
            "y": -11
          },
          {
            "edges": [
              {
                "x": -4,
                "y": -6
              },
              {
                "x": -5,
                "y": -8
              },
              {
                "x": -4,
                "y": -7
              },
              {
                "x": -6,
                "y": -6
              },
              {
                "x": -6,
                "y": -7
              }
            ],
            "x": -5,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 1
              },
              {
                "x": -13,
                "y": 1
              },
              {
                "x": -15,
                "y": 1
              },
              {
                "x": -14,
                "y": 0
              },
              {
                "x": -14,
                "y": 2
              },
              {
                "x": -13,
                "y": 0
              }
            ],
            "x": -14,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 6,
                "y": -12
              },
              {
                "x": 4,
                "y": -13
              },
              {
                "x": 3,
                "y": -12
              },
              {
                "x": 5,
                "y": -14
              },
              {
                "x": 5,
                "y": -10
              }
            ],
            "x": 5,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -3
              },
              {
                "x": 1,
                "y": -2
              },
              {
                "x": 3,
                "y": -1
              },
              {
                "x": 3,
                "y": -2
              },
              {
                "x": 2,
                "y": -1
              }
            ],
            "x": 2,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 8
              },
              {
                "x": -15,
                "y": 10
              },
              {
                "x": -16,
                "y": 8
              },
              {
                "x": -16,
                "y": 10
              },
              {
                "x": -16,
                "y": 11
              }
            ],
            "x": -16,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 14
              },
              {
                "x": -3,
                "y": 13
              },
              {
                "x": -1,
                "y": 13
              },
              {
                "x": -1,
                "y": 12
              },
              {
                "x": -3,
                "y": 14
              },
              {
                "x": -2,
                "y": 15
              }
            ],
            "x": -2,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 14
              },
              {
                "x": -5,
                "y": 12
              },
              {
                "x": -4,
                "y": 12
              },
              {
                "x": -3,
                "y": 13
              },
              {
                "x": -4,
                "y": 14
              },
              {
                "x": -3,
                "y": 14
              },
              {
                "x": -6,
                "y": 13
              }
            ],
            "x": -4,
            "y": 13
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 3
              },
              {
                "x": 2,
                "y": 1
              },
              {
                "x": 3,
                "y": 2
              },
              {
                "x": 3,
                "y": 3
              },
              {
                "x": 2,
                "y": 4
              }
            ],
            "x": 2,
            "y": 2
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 1
              },
              {
                "x": -13,
                "y": -1
              },
              {
                "x": -11,
                "y": 0
              },
              {
                "x": -12,
                "y": 2
              },
              {
                "x": -13,
                "y": 0
              },
              {
                "x": -12,
                "y": -1
              }
            ],
            "x": -12,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 13
              },
              {
                "x": -9,
                "y": 15
              },
              {
                "x": -7,
                "y": 15
              },
              {
                "x": -6,
                "y": 14
              },
              {
                "x": -8,
                "y": 15
              },
              {
                "x": -9,
                "y": 14
              },
              {
                "x": -8,
                "y": 13
              }
            ],
            "x": -8,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 6
              },
              {
                "x": -3,
                "y": 8
              },
              {
                "x": -2,
                "y": 7
              },
              {
                "x": -4,
                "y": 7
              },
              {
                "x": -2,
                "y": 8
              }
            ],
            "x": -3,
            "y": 7
          },
          {
            "edges": [
              {
                "x": -16,
                "y": -2
              },
              {
                "x": -16,
                "y": -6
              },
              {
                "x": -15,
                "y": -4
              },
              {
                "x": -16,
                "y": -5
              },
              {
                "x": -14,
                "y": -4
              }
            ],
            "x": -16,
            "y": -4
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 10
              },
              {
                "x": 3,
                "y": 12
              },
              {
                "x": 3,
                "y": 11
              },
              {
                "x": 2,
                "y": 10
              },
              {
                "x": 1,
                "y": 11
              }
            ],
            "x": 2,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -4,
                "y": 1
              },
              {
                "x": -3,
                "y": 0
              },
              {
                "x": -3,
                "y": 1
              },
              {
                "x": -5,
                "y": 1
              },
              {
                "x": -2,
                "y": 0
              }
            ],
            "x": -4,
            "y": 0
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -9
              },
              {
                "x": 0,
                "y": -9
              },
              {
                "x": 1,
                "y": -10
              },
              {
                "x": 1,
                "y": -8
              },
              {
                "x": 2,
                "y": -8
              },
              {
                "x": 0,
                "y": -10
              },
              {
                "x": 2,
                "y": -10
              }
            ],
            "x": 1,
            "y": -9
          },
          {
            "edges": [
              {
                "x": 4,
                "y": -4
              },
              {
                "x": 4,
                "y": -6
              },
              {
                "x": 3,
                "y": -4
              },
              {
                "x": 1,
                "y": -5
              },
              {
                "x": 2,
                "y": -3
              }
            ],
            "x": 3,
            "y": -5
          },
          {
            "edges": [
              {
                "x": -10,
                "y": -10
              },
              {
                "x": -10,
                "y": -11
              },
              {
                "x": -12,
                "y": -11
              },
              {
                "x": -12,
                "y": -12
              },
              {
                "x": -13,
                "y": -11
              }
            ],
            "x": -11,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 4,
                "y": 3
              },
              {
                "x": 2,
                "y": 1
              },
              {
                "x": 2,
                "y": 2
              },
              {
                "x": 3,
                "y": 3
              },
              {
                "x": 3,
                "y": 4
              }
            ],
            "x": 3,
            "y": 2
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -15
              },
              {
                "x": 3,
                "y": -14
              },
              {
                "x": 5,
                "y": -14
              },
              {
                "x": 4,
                "y": -16
              },
              {
                "x": 5,
                "y": -15
              },
              {
                "x": 4,
                "y": -14
              },
              {
                "x": 3,
                "y": -16
              }
            ],
            "x": 4,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -12
              },
              {
                "x": 5,
                "y": -14
              },
              {
                "x": 5,
                "y": -12
              },
              {
                "x": 4,
                "y": -14
              },
              {
                "x": 3,
                "y": -14
              }
            ],
            "x": 4,
            "y": -13
          },
          {
            "edges": [
              {
                "x": -14,
                "y": -12
              },
              {
                "x": -14,
                "y": -11
              },
              {
                "x": -15,
                "y": -10
              },
              {
                "x": -16,
                "y": -10
              },
              {
                "x": -14,
                "y": -10
              }
            ],
            "x": -15,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 13,
                "y": -1
              },
              {
                "x": 13,
                "y": 1
              },
              {
                "x": 14,
                "y": -1
              },
              {
                "x": 12,
                "y": 0
              },
              {
                "x": 14,
                "y": 0
              },
              {
                "x": 15,
                "y": 0
              }
            ],
            "x": 13,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 15
              },
              {
                "x": -16,
                "y": 13
              },
              {
                "x": -15,
                "y": 13
              },
              {
                "x": -16,
                "y": 14
              },
              {
                "x": -15,
                "y": 15
              },
              {
                "x": -14,
                "y": 14
              }
            ],
            "x": -15,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -4,
                "y": 12
              },
              {
                "x": -2,
                "y": 13
              },
              {
                "x": -4,
                "y": 13
              },
              {
                "x": -3,
                "y": 14
              },
              {
                "x": -4,
                "y": 14
              }
            ],
            "x": -3,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -3
              },
              {
                "x": 1,
                "y": -2
              },
              {
                "x": -1,
                "y": -2
              },
              {
                "x": -1,
                "y": -1
              },
              {
                "x": 0,
                "y": -1
              }
            ],
            "x": 0,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 15
              },
              {
                "x": -15,
                "y": 12
              },
              {
                "x": -14,
                "y": 12
              },
              {
                "x": -16,
                "y": 13
              },
              {
                "x": -15,
                "y": 14
              },
              {
                "x": -14,
                "y": 13
              },
              {
                "x": -16,
                "y": 14
              },
              {
                "x": -15,
                "y": 15
              },
              {
                "x": -14,
                "y": 14
              }
            ],
            "x": -15,
            "y": 13
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 13
              },
              {
                "x": 12,
                "y": 14
              },
              {
                "x": 10,
                "y": 14
              },
              {
                "x": 12,
                "y": 13
              },
              {
                "x": 11,
                "y": 12
              },
              {
                "x": 12,
                "y": 12
              }
            ],
            "x": 11,
            "y": 13
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -9
              },
              {
                "x": 1,
                "y": -9
              },
              {
                "x": 0,
                "y": -10
              },
              {
                "x": 2,
                "y": -10
              },
              {
                "x": 1,
                "y": -11
              }
            ],
            "x": 1,
            "y": -10
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 3
              },
              {
                "x": -4,
                "y": 4
              },
              {
                "x": -4,
                "y": 2
              },
              {
                "x": -3,
                "y": 3
              },
              {
                "x": -3,
                "y": 2
              }
            ],
            "x": -4,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -15,
                "y": -9
              },
              {
                "x": -16,
                "y": -8
              },
              {
                "x": -15,
                "y": -11
              },
              {
                "x": -15,
                "y": -10
              },
              {
                "x": -14,
                "y": -10
              }
            ],
            "x": -16,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -10
              },
              {
                "x": 11,
                "y": -12
              },
              {
                "x": 10,
                "y": -11
              },
              {
                "x": 12,
                "y": -11
              },
              {
                "x": 12,
                "y": -10
              },
              {
                "x": 11,
                "y": -10
              },
              {
                "x": 12,
                "y": -12
              }
            ],
            "x": 11,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 12
              },
              {
                "x": 13,
                "y": 10
              },
              {
                "x": 14,
                "y": 10
              },
              {
                "x": 13,
                "y": 11
              },
              {
                "x": 15,
                "y": 11
              },
              {
                "x": 15,
                "y": 12
              },
              {
                "x": 15,
                "y": 10
              }
            ],
            "x": 14,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -1
              },
              {
                "x": 11,
                "y": -1
              },
              {
                "x": 10,
                "y": -3
              },
              {
                "x": 9,
                "y": -2
              },
              {
                "x": 11,
                "y": -2
              }
            ],
            "x": 10,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 0
              },
              {
                "x": -7,
                "y": 1
              },
              {
                "x": -9,
                "y": 2
              },
              {
                "x": -8,
                "y": 0
              },
              {
                "x": -9,
                "y": -1
              }
            ],
            "x": -9,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 2,
                "y": 4
              },
              {
                "x": 0,
                "y": 3
              },
              {
                "x": 1,
                "y": 3
              },
              {
                "x": 1,
                "y": 5
              },
              {
                "x": 0,
                "y": 4
              },
              {
                "x": 2,
                "y": 5
              }
            ],
            "x": 1,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -16
              },
              {
                "x": -12,
                "y": -15
              },
              {
                "x": -11,
                "y": -16
              },
              {
                "x": -12,
                "y": -14
              },
              {
                "x": -10,
                "y": -16
              },
              {
                "x": -14,
                "y": -16
              }
            ],
            "x": -12,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -14,
                "y": -7
              },
              {
                "x": -12,
                "y": -9
              },
              {
                "x": -12,
                "y": -8
              },
              {
                "x": -12,
                "y": -7
              },
              {
                "x": -13,
                "y": -7
              },
              {
                "x": -14,
                "y": -9
              }
            ],
            "x": -13,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -3
              },
              {
                "x": -7,
                "y": -3
              },
              {
                "x": -5,
                "y": -4
              },
              {
                "x": -6,
                "y": -2
              },
              {
                "x": -5,
                "y": -2
              },
              {
                "x": -7,
                "y": -2
              },
              {
                "x": -6,
                "y": -5
              }
            ],
            "x": -6,
            "y": -3
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 15
              },
              {
                "x": 1,
                "y": 15
              },
              {
                "x": 2,
                "y": 14
              },
              {
                "x": 1,
                "y": 14
              },
              {
                "x": 2,
                "y": 13
              }
            ],
            "x": 2,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 2,
                "y": 5
              },
              {
                "x": 1,
                "y": 4
              },
              {
                "x": 0,
                "y": 5
              },
              {
                "x": 1,
                "y": 6
              },
              {
                "x": 2,
                "y": 4
              }
            ],
            "x": 1,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -14
              },
              {
                "x": 8,
                "y": -12
              },
              {
                "x": 8,
                "y": -14
              },
              {
                "x": 9,
                "y": -12
              },
              {
                "x": 9,
                "y": -14
              },
              {
                "x": 7,
                "y": -12
              }
            ],
            "x": 8,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -16
              },
              {
                "x": 15,
                "y": -14
              },
              {
                "x": 15,
                "y": -15
              },
              {
                "x": 15,
                "y": -12
              },
              {
                "x": 13,
                "y": -12
              },
              {
                "x": 14,
                "y": -11
              }
            ],
            "x": 15,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 1,
                "y": -15
              },
              {
                "x": 0,
                "y": -15
              },
              {
                "x": 0,
                "y": -13
              },
              {
                "x": -1,
                "y": -15
              },
              {
                "x": 1,
                "y": -14
              },
              {
                "x": -1,
                "y": -14
              }
            ],
            "x": 0,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 13
              },
              {
                "x": 9,
                "y": 11
              },
              {
                "x": 10,
                "y": 11
              },
              {
                "x": 11,
                "y": 12
              },
              {
                "x": 9,
                "y": 12
              },
              {
                "x": 11,
                "y": 11
              }
            ],
            "x": 10,
            "y": 12
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -3
              },
              {
                "x": -6,
                "y": -2
              },
              {
                "x": -6,
                "y": -3
              },
              {
                "x": -4,
                "y": -2
              },
              {
                "x": -6,
                "y": -1
              },
              {
                "x": -4,
                "y": -3
              }
            ],
            "x": -5,
            "y": -2
          },
          {
            "edges": [
              {
                "x": 5,
                "y": -14
              },
              {
                "x": 4,
                "y": -16
              },
              {
                "x": 4,
                "y": -15
              },
              {
                "x": 6,
                "y": -16
              },
              {
                "x": 4,
                "y": -14
              }
            ],
            "x": 5,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 7
              },
              {
                "x": 14,
                "y": 8
              },
              {
                "x": 12,
                "y": 8
              },
              {
                "x": 12,
                "y": 9
              },
              {
                "x": 14,
                "y": 9
              }
            ],
            "x": 13,
            "y": 8
          },
          {
            "edges": [
              {
                "x": -6,
                "y": -15
              },
              {
                "x": -8,
                "y": -16
              },
              {
                "x": -8,
                "y": -15
              },
              {
                "x": -9,
                "y": -16
              },
              {
                "x": -7,
                "y": -14
              }
            ],
            "x": -7,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 14
              },
              {
                "x": -5,
                "y": 15
              },
              {
                "x": -4,
                "y": 13
              },
              {
                "x": -3,
                "y": 13
              },
              {
                "x": -3,
                "y": 14
              },
              {
                "x": -4,
                "y": 15
              },
              {
                "x": -3,
                "y": 15
              }
            ],
            "x": -4,
            "y": 14
          },
          {
            "edges": [
              {
                "x": 8,
                "y": -15
              },
              {
                "x": 7,
                "y": -15
              },
              {
                "x": 8,
                "y": -16
              },
              {
                "x": 6,
                "y": -16
              },
              {
                "x": 7,
                "y": -14
              },
              {
                "x": 9,
                "y": -16
              }
            ],
            "x": 7,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -7
              },
              {
                "x": -10,
                "y": -7
              },
              {
                "x": -9,
                "y": -6
              },
              {
                "x": -9,
                "y": -8
              },
              {
                "x": -8,
                "y": -8
              },
              {
                "x": -10,
                "y": -6
              }
            ],
            "x": -9,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -11,
                "y": 10
              },
              {
                "x": -11,
                "y": 11
              },
              {
                "x": -9,
                "y": 11
              },
              {
                "x": -10,
                "y": 12
              },
              {
                "x": -10,
                "y": 10
              },
              {
                "x": -8,
                "y": 11
              }
            ],
            "x": -10,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -1
              },
              {
                "x": 11,
                "y": -1
              },
              {
                "x": 9,
                "y": 0
              },
              {
                "x": 11,
                "y": 0
              },
              {
                "x": 9,
                "y": -1
              },
              {
                "x": 11,
                "y": 1
              }
            ],
            "x": 10,
            "y": 0
          },
          {
            "edges": [
              {
                "x": 12,
                "y": 2
              },
              {
                "x": 11,
                "y": 2
              },
              {
                "x": 11,
                "y": 0
              },
              {
                "x": 10,
                "y": 0
              },
              {
                "x": 10,
                "y": 2
              }
            ],
            "x": 11,
            "y": 1
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 6
              },
              {
                "x": -1,
                "y": 5
              },
              {
                "x": 0,
                "y": 7
              },
              {
                "x": 0,
                "y": 5
              },
              {
                "x": 1,
                "y": 6
              },
              {
                "x": -1,
                "y": 7
              }
            ],
            "x": 0,
            "y": 6
          },
          {
            "edges": [
              {
                "x": 6,
                "y": 12
              },
              {
                "x": 4,
                "y": 12
              },
              {
                "x": 6,
                "y": 11
              },
              {
                "x": 3,
                "y": 12
              },
              {
                "x": 7,
                "y": 12
              }
            ],
            "x": 5,
            "y": 12
          },
          {
            "edges": [
              {
                "x": 11,
                "y": 6
              },
              {
                "x": 11,
                "y": 5
              },
              {
                "x": 9,
                "y": 4
              },
              {
                "x": 10,
                "y": 6
              },
              {
                "x": 10,
                "y": 4
              },
              {
                "x": 9,
                "y": 5
              },
              {
                "x": 9,
                "y": 6
              }
            ],
            "x": 10,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 8,
                "y": -16
              },
              {
                "x": 8,
                "y": -15
              },
              {
                "x": 10,
                "y": -15
              },
              {
                "x": 7,
                "y": -16
              },
              {
                "x": 9,
                "y": -14
              },
              {
                "x": 11,
                "y": -16
              }
            ],
            "x": 9,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -15,
                "y": -9
              },
              {
                "x": -14,
                "y": -11
              },
              {
                "x": -15,
                "y": -11
              },
              {
                "x": -16,
                "y": -10
              },
              {
                "x": -14,
                "y": -9
              },
              {
                "x": -15,
                "y": -10
              },
              {
                "x": -13,
                "y": -11
              }
            ],
            "x": -14,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -14
              },
              {
                "x": 8,
                "y": -15
              },
              {
                "x": 8,
                "y": -14
              },
              {
                "x": 7,
                "y": -16
              },
              {
                "x": 8,
                "y": -16
              },
              {
                "x": 6,
                "y": -16
              }
            ],
            "x": 7,
            "y": -15
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -10
              },
              {
                "x": -4,
                "y": -10
              },
              {
                "x": -5,
                "y": -9
              },
              {
                "x": -5,
                "y": -8
              },
              {
                "x": -3,
                "y": -8
              },
              {
                "x": -3,
                "y": -10
              },
              {
                "x": -3,
                "y": -9
              }
            ],
            "x": -4,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -12,
                "y": 14
              },
              {
                "x": -10,
                "y": 14
              },
              {
                "x": -10,
                "y": 12
              },
              {
                "x": -9,
                "y": 13
              },
              {
                "x": -11,
                "y": 11
              }
            ],
            "x": -11,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 7
              },
              {
                "x": -8,
                "y": 9
              },
              {
                "x": -7,
                "y": 8
              },
              {
                "x": -9,
                "y": 7
              },
              {
                "x": -10,
                "y": 8
              },
              {
                "x": -10,
                "y": 9
              }
            ],
            "x": -9,
            "y": 8
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 7
              },
              {
                "x": -9,
                "y": 7
              },
              {
                "x": -9,
                "y": 8
              },
              {
                "x": -10,
                "y": 9
              },
              {
                "x": -11,
                "y": 7
              }
            ],
            "x": -10,
            "y": 8
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 15
              },
              {
                "x": -10,
                "y": 14
              },
              {
                "x": -11,
                "y": 15
              },
              {
                "x": -9,
                "y": 14
              },
              {
                "x": -8,
                "y": 15
              },
              {
                "x": -12,
                "y": 15
              }
            ],
            "x": -10,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 12
              },
              {
                "x": -15,
                "y": 10
              },
              {
                "x": -16,
                "y": 9
              },
              {
                "x": -16,
                "y": 10
              },
              {
                "x": -15,
                "y": 11
              },
              {
                "x": -16,
                "y": 13
              }
            ],
            "x": -16,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -2,
                "y": 9
              },
              {
                "x": -2,
                "y": 11
              },
              {
                "x": -3,
                "y": 10
              },
              {
                "x": -1,
                "y": 10
              },
              {
                "x": -3,
                "y": 9
              }
            ],
            "x": -2,
            "y": 10
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -14
              },
              {
                "x": 12,
                "y": -15
              },
              {
                "x": 12,
                "y": -13
              },
              {
                "x": 13,
                "y": -14
              },
              {
                "x": 11,
                "y": -13
              },
              {
                "x": 11,
                "y": -15
              }
            ],
            "x": 12,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 8,
                "y": -15
              },
              {
                "x": 7,
                "y": -16
              },
              {
                "x": 9,
                "y": -16
              },
              {
                "x": 7,
                "y": -15
              },
              {
                "x": 8,
                "y": -14
              },
              {
                "x": 6,
                "y": -16
              }
            ],
            "x": 8,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -12,
                "y": 14
              },
              {
                "x": -10,
                "y": 15
              },
              {
                "x": -12,
                "y": 15
              },
              {
                "x": -10,
                "y": 14
              },
              {
                "x": -9,
                "y": 15
              },
              {
                "x": -13,
                "y": 15
              }
            ],
            "x": -11,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 11,
                "y": 10
              },
              {
                "x": 11,
                "y": 8
              },
              {
                "x": 12,
                "y": 9
              },
              {
                "x": 10,
                "y": 9
              },
              {
                "x": 10,
                "y": 8
              },
              {
                "x": 12,
                "y": 10
              }
            ],
            "x": 11,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 4
              },
              {
                "x": -5,
                "y": 3
              },
              {
                "x": -4,
                "y": 5
              },
              {
                "x": -3,
                "y": 4
              },
              {
                "x": -4,
                "y": 3
              },
              {
                "x": -3,
                "y": 3
              }
            ],
            "x": -4,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 8
              },
              {
                "x": -14,
                "y": 8
              },
              {
                "x": -15,
                "y": 10
              },
              {
                "x": -13,
                "y": 9
              },
              {
                "x": -13,
                "y": 10
              }
            ],
            "x": -14,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 4
              },
              {
                "x": -11,
                "y": 3
              },
              {
                "x": -11,
                "y": 4
              },
              {
                "x": -9,
                "y": 2
              },
              {
                "x": -10,
                "y": 5
              }
            ],
            "x": -10,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -2
              },
              {
                "x": -3,
                "y": -2
              },
              {
                "x": -4,
                "y": -3
              },
              {
                "x": -5,
                "y": -3
              },
              {
                "x": -6,
                "y": -2
              }
            ],
            "x": -4,
            "y": -2
          },
          {
            "edges": [
              {
                "x": 5,
                "y": 8
              },
              {
                "x": 4,
                "y": 10
              },
              {
                "x": 4,
                "y": 9
              },
              {
                "x": 5,
                "y": 10
              },
              {
                "x": 6,
                "y": 8
              },
              {
                "x": 6,
                "y": 10
              }
            ],
            "x": 5,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -9,
                "y": -16
              },
              {
                "x": -8,
                "y": -15
              },
              {
                "x": -9,
                "y": -15
              },
              {
                "x": -7,
                "y": -16
              },
              {
                "x": -8,
                "y": -14
              }
            ],
            "x": -8,
            "y": -16
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 14
              },
              {
                "x": 7,
                "y": 15
              },
              {
                "x": 7,
                "y": 12
              },
              {
                "x": 8,
                "y": 12
              },
              {
                "x": 9,
                "y": 12
              },
              {
                "x": 10,
                "y": 13
              }
            ],
            "x": 8,
            "y": 13
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -15
              },
              {
                "x": 3,
                "y": -14
              },
              {
                "x": 1,
                "y": -14
              },
              {
                "x": 2,
                "y": -13
              },
              {
                "x": 1,
                "y": -15
              }
            ],
            "x": 2,
            "y": -14
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 4
              },
              {
                "x": -8,
                "y": 4
              },
              {
                "x": -10,
                "y": 5
              },
              {
                "x": -6,
                "y": 5
              },
              {
                "x": -10,
                "y": 6
              }
            ],
            "x": -8,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 13
              },
              {
                "x": 13,
                "y": 14
              },
              {
                "x": 14,
                "y": 12
              },
              {
                "x": 12,
                "y": 14
              },
              {
                "x": 13,
                "y": 12
              },
              {
                "x": 12,
                "y": 13
              },
              {
                "x": 15,
                "y": 15
              },
              {
                "x": 13,
                "y": 15
              }
            ],
            "x": 13,
            "y": 13
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 13
              },
              {
                "x": 14,
                "y": 12
              },
              {
                "x": 15,
                "y": 11
              },
              {
                "x": 14,
                "y": 11
              },
              {
                "x": 13,
                "y": 12
              }
            ],
            "x": 15,
            "y": 12
          },
          {
            "edges": [
              {
                "x": 9,
                "y": -6
              },
              {
                "x": 10,
                "y": -7
              },
              {
                "x": 8,
                "y": -8
              },
              {
                "x": 9,
                "y": -9
              },
              {
                "x": 7,
                "y": -7
              }
            ],
            "x": 9,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 3
              },
              {
                "x": -15,
                "y": 5
              },
              {
                "x": -16,
                "y": 3
              },
              {
                "x": -16,
                "y": 6
              },
              {
                "x": -14,
                "y": 3
              }
            ],
            "x": -16,
            "y": 4
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 8
              },
              {
                "x": 8,
                "y": 9
              },
              {
                "x": 8,
                "y": 8
              },
              {
                "x": 6,
                "y": 8
              },
              {
                "x": 6,
                "y": 10
              }
            ],
            "x": 7,
            "y": 9
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -15
              },
              {
                "x": 2,
                "y": -16
              },
              {
                "x": 4,
                "y": -16
              },
              {
                "x": 2,
                "y": -15
              },
              {
                "x": 4,
                "y": -15
              }
            ],
            "x": 3,
            "y": -16
          },
          {
            "edges": [
              {
                "x": 1,
                "y": -7
              },
              {
                "x": 2,
                "y": -8
              },
              {
                "x": 1,
                "y": -9
              },
              {
                "x": 0,
                "y": -8
              },
              {
                "x": 2,
                "y": -9
              },
              {
                "x": 2,
                "y": -7
              }
            ],
            "x": 1,
            "y": -8
          },
          {
            "edges": [
              {
                "x": 6,
                "y": 1
              },
              {
                "x": 5,
                "y": -1
              },
              {
                "x": 6,
                "y": 0
              },
              {
                "x": 4,
                "y": 0
              },
              {
                "x": 5,
                "y": 1
              }
            ],
            "x": 5,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -12,
                "y": 14
              },
              {
                "x": -13,
                "y": 14
              },
              {
                "x": -14,
                "y": 13
              },
              {
                "x": -14,
                "y": 12
              },
              {
                "x": -14,
                "y": 14
              }
            ],
            "x": -13,
            "y": 13
          },
          {
            "edges": [
              {
                "x": 6,
                "y": -2
              },
              {
                "x": 7,
                "y": -4
              },
              {
                "x": 5,
                "y": -2
              },
              {
                "x": 8,
                "y": -3
              },
              {
                "x": 6,
                "y": -1
              }
            ],
            "x": 6,
            "y": -3
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -14
              },
              {
                "x": 12,
                "y": -12
              },
              {
                "x": 13,
                "y": -12
              },
              {
                "x": 11,
                "y": -13
              },
              {
                "x": 12,
                "y": -14
              },
              {
                "x": 11,
                "y": -12
              },
              {
                "x": 13,
                "y": -14
              }
            ],
            "x": 12,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -14
              },
              {
                "x": 12,
                "y": -15
              },
              {
                "x": 10,
                "y": -15
              },
              {
                "x": 11,
                "y": -16
              },
              {
                "x": 12,
                "y": -14
              }
            ],
            "x": 11,
            "y": -15
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -7
              },
              {
                "x": -7,
                "y": -8
              },
              {
                "x": -6,
                "y": -6
              },
              {
                "x": -6,
                "y": -7
              },
              {
                "x": -8,
                "y": -8
              }
            ],
            "x": -7,
            "y": -7
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -4
              },
              {
                "x": 10,
                "y": -5
              },
              {
                "x": 9,
                "y": -6
              },
              {
                "x": 9,
                "y": -4
              },
              {
                "x": 9,
                "y": -3
              }
            ],
            "x": 9,
            "y": -5
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -9
              },
              {
                "x": 14,
                "y": -9
              },
              {
                "x": 15,
                "y": -10
              },
              {
                "x": 14,
                "y": -11
              },
              {
                "x": 13,
                "y": -11
              }
            ],
            "x": 14,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -10
              },
              {
                "x": 12,
                "y": -10
              },
              {
                "x": 11,
                "y": -11
              },
              {
                "x": 10,
                "y": -11
              },
              {
                "x": 12,
                "y": -11
              },
              {
                "x": 10,
                "y": -9
              }
            ],
            "x": 11,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 5,
                "y": -15
              },
              {
                "x": 7,
                "y": -16
              },
              {
                "x": 7,
                "y": -15
              },
              {
                "x": 4,
                "y": -16
              },
              {
                "x": 8,
                "y": -16
              }
            ],
            "x": 6,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -2,
                "y": -13
              },
              {
                "x": -3,
                "y": -14
              },
              {
                "x": -3,
                "y": -13
              },
              {
                "x": -1,
                "y": -15
              },
              {
                "x": -1,
                "y": -14
              },
              {
                "x": -3,
                "y": -16
              }
            ],
            "x": -2,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 11
              },
              {
                "x": 7,
                "y": 12
              },
              {
                "x": 6,
                "y": 12
              },
              {
                "x": 5,
                "y": 12
              },
              {
                "x": 6,
                "y": 10
              },
              {
                "x": 5,
                "y": 10
              }
            ],
            "x": 6,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -10
              },
              {
                "x": -10,
                "y": -10
              },
              {
                "x": -10,
                "y": -9
              },
              {
                "x": -9,
                "y": -8
              },
              {
                "x": -9,
                "y": -10
              }
            ],
            "x": -9,
            "y": -9
          },
          {
            "edges": [
              {
                "x": 12,
                "y": 5
              },
              {
                "x": 11,
                "y": 5
              },
              {
                "x": 13,
                "y": 5
              },
              {
                "x": 14,
                "y": 4
              },
              {
                "x": 12,
                "y": 2
              }
            ],
            "x": 12,
            "y": 4
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 15
              },
              {
                "x": 3,
                "y": 13
              },
              {
                "x": 5,
                "y": 15
              },
              {
                "x": 4,
                "y": 12
              },
              {
                "x": 2,
                "y": 14
              }
            ],
            "x": 4,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -11,
                "y": -8
              },
              {
                "x": -9,
                "y": -7
              },
              {
                "x": -10,
                "y": -6
              },
              {
                "x": -9,
                "y": -6
              },
              {
                "x": -9,
                "y": -8
              },
              {
                "x": -11,
                "y": -6
              }
            ],
            "x": -10,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -11,
                "y": 4
              },
              {
                "x": -12,
                "y": 2
              },
              {
                "x": -10,
                "y": 3
              },
              {
                "x": -12,
                "y": 4
              },
              {
                "x": -13,
                "y": 3
              }
            ],
            "x": -11,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -1
              },
              {
                "x": -7,
                "y": -3
              },
              {
                "x": -6,
                "y": -2
              },
              {
                "x": -6,
                "y": -3
              },
              {
                "x": -6,
                "y": -1
              },
              {
                "x": -8,
                "y": -3
              }
            ],
            "x": -7,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -3,
                "y": -14
              },
              {
                "x": -5,
                "y": -14
              },
              {
                "x": -3,
                "y": -13
              },
              {
                "x": -4,
                "y": -15
              },
              {
                "x": -5,
                "y": -13
              },
              {
                "x": -5,
                "y": -15
              }
            ],
            "x": -4,
            "y": -14
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 1
              },
              {
                "x": -16,
                "y": 0
              },
              {
                "x": -14,
                "y": 1
              },
              {
                "x": -14,
                "y": 0
              },
              {
                "x": -14,
                "y": 2
              }
            ],
            "x": -15,
            "y": 1
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 14
              },
              {
                "x": 0,
                "y": 13
              },
              {
                "x": -2,
                "y": 13
              },
              {
                "x": -1,
                "y": 12
              },
              {
                "x": 0,
                "y": 12
              }
            ],
            "x": -1,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -7
              },
              {
                "x": 1,
                "y": -7
              },
              {
                "x": 0,
                "y": -9
              },
              {
                "x": -1,
                "y": -8
              },
              {
                "x": 1,
                "y": -8
              },
              {
                "x": 0,
                "y": -7
              }
            ],
            "x": 0,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 2
              },
              {
                "x": -4,
                "y": 1
              },
              {
                "x": -4,
                "y": 3
              },
              {
                "x": -5,
                "y": 2
              },
              {
                "x": -5,
                "y": 3
              },
              {
                "x": -5,
                "y": 1
              }
            ],
            "x": -4,
            "y": 2
          },
          {
            "edges": [
              {
                "x": 14,
                "y": -8
              },
              {
                "x": 12,
                "y": -8
              },
              {
                "x": 13,
                "y": -9
              },
              {
                "x": 13,
                "y": -7
              },
              {
                "x": 14,
                "y": -9
              },
              {
                "x": 12,
                "y": -7
              }
            ],
            "x": 13,
            "y": -8
          },
          {
            "edges": [
              {
                "x": 11,
                "y": 10
              },
              {
                "x": 13,
                "y": 10
              },
              {
                "x": 11,
                "y": 11
              },
              {
                "x": 12,
                "y": 10
              },
              {
                "x": 13,
                "y": 11
              },
              {
                "x": 12,
                "y": 12
              }
            ],
            "x": 12,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 12
              },
              {
                "x": -7,
                "y": 11
              },
              {
                "x": -5,
                "y": 11
              },
              {
                "x": -5,
                "y": 10
              },
              {
                "x": -4,
                "y": 11
              },
              {
                "x": -6,
                "y": 13
              }
            ],
            "x": -6,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -7
              },
              {
                "x": -9,
                "y": -7
              },
              {
                "x": -10,
                "y": -7
              },
              {
                "x": -10,
                "y": -6
              },
              {
                "x": -9,
                "y": -8
              }
            ],
            "x": -9,
            "y": -6
          },
          {
            "edges": [
              {
                "x": 4,
                "y": 3
              },
              {
                "x": 3,
                "y": 4
              },
              {
                "x": 2,
                "y": 2
              },
              {
                "x": 3,
                "y": 2
              },
              {
                "x": 2,
                "y": 4
              },
              {
                "x": 5,
                "y": 3
              }
            ],
            "x": 3,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -15,
                "y": -9
              },
              {
                "x": -16,
                "y": -8
              },
              {
                "x": -14,
                "y": -10
              },
              {
                "x": -13,
                "y": -8
              },
              {
                "x": -15,
                "y": -10
              },
              {
                "x": -14,
                "y": -7
              }
            ],
            "x": -14,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -6
              },
              {
                "x": -14,
                "y": -7
              },
              {
                "x": -12,
                "y": -8
              },
              {
                "x": -12,
                "y": -7
              },
              {
                "x": -13,
                "y": -8
              },
              {
                "x": -14,
                "y": -6
              }
            ],
            "x": -13,
            "y": -7
          },
          {
            "edges": [
              {
                "x": 11,
                "y": 10
              },
              {
                "x": 10,
                "y": 11
              },
              {
                "x": 12,
                "y": 11
              },
              {
                "x": 11,
                "y": 12
              },
              {
                "x": 10,
                "y": 12
              }
            ],
            "x": 11,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 4,
                "y": 6
              },
              {
                "x": 3,
                "y": 5
              },
              {
                "x": 3,
                "y": 6
              },
              {
                "x": 5,
                "y": 5
              },
              {
                "x": 3,
                "y": 4
              },
              {
                "x": 5,
                "y": 4
              },
              {
                "x": 5,
                "y": 6
              }
            ],
            "x": 4,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 4,
                "y": -4
              },
              {
                "x": 4,
                "y": -2
              },
              {
                "x": 5,
                "y": -2
              },
              {
                "x": 3,
                "y": -2
              },
              {
                "x": 3,
                "y": -4
              }
            ],
            "x": 4,
            "y": -3
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 11
              },
              {
                "x": 7,
                "y": 11
              },
              {
                "x": 8,
                "y": 12
              },
              {
                "x": 7,
                "y": 12
              },
              {
                "x": 9,
                "y": 12
              }
            ],
            "x": 8,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 13
              },
              {
                "x": 10,
                "y": 11
              },
              {
                "x": 11,
                "y": 13
              },
              {
                "x": 10,
                "y": 12
              },
              {
                "x": 11,
                "y": 11
              },
              {
                "x": 12,
                "y": 12
              }
            ],
            "x": 11,
            "y": 12
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -10
              },
              {
                "x": -7,
                "y": -8
              },
              {
                "x": -7,
                "y": -11
              },
              {
                "x": -8,
                "y": -8
              },
              {
                "x": -5,
                "y": -9
              }
            ],
            "x": -7,
            "y": -9
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 4
              },
              {
                "x": 9,
                "y": 3
              },
              {
                "x": 10,
                "y": 4
              },
              {
                "x": 10,
                "y": 5
              },
              {
                "x": 9,
                "y": 6
              },
              {
                "x": 8,
                "y": 5
              },
              {
                "x": 10,
                "y": 6
              },
              {
                "x": 8,
                "y": 6
              }
            ],
            "x": 9,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 6,
                "y": 1
              },
              {
                "x": 5,
                "y": -1
              },
              {
                "x": 6,
                "y": -1
              },
              {
                "x": 7,
                "y": 1
              },
              {
                "x": 7,
                "y": 0
              },
              {
                "x": 5,
                "y": 0
              },
              {
                "x": 7,
                "y": -1
              },
              {
                "x": 5,
                "y": 1
              }
            ],
            "x": 6,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -7
              },
              {
                "x": -7,
                "y": -8
              },
              {
                "x": -9,
                "y": -7
              },
              {
                "x": -7,
                "y": -7
              },
              {
                "x": -7,
                "y": -9
              },
              {
                "x": -9,
                "y": -8
              }
            ],
            "x": -8,
            "y": -8
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 15
              },
              {
                "x": 14,
                "y": 13
              },
              {
                "x": 13,
                "y": 14
              },
              {
                "x": 13,
                "y": 13
              },
              {
                "x": 12,
                "y": 15
              }
            ],
            "x": 15,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -7,
                "y": -14
              },
              {
                "x": -8,
                "y": -13
              },
              {
                "x": -8,
                "y": -15
              },
              {
                "x": -8,
                "y": -16
              },
              {
                "x": -9,
                "y": -15
              },
              {
                "x": -9,
                "y": -13
              }
            ],
            "x": -8,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 9,
                "y": -16
              },
              {
                "x": 11,
                "y": -15
              },
              {
                "x": 11,
                "y": -14
              },
              {
                "x": 9,
                "y": -14
              },
              {
                "x": 11,
                "y": -16
              }
            ],
            "x": 10,
            "y": -15
          },
          {
            "edges": [
              {
                "x": -10,
                "y": -2
              },
              {
                "x": -11,
                "y": -3
              },
              {
                "x": -9,
                "y": -3
              },
              {
                "x": -9,
                "y": -2
              },
              {
                "x": -11,
                "y": -2
              },
              {
                "x": -9,
                "y": -4
              }
            ],
            "x": -10,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -10,
                "y": -10
              },
              {
                "x": -10,
                "y": -11
              },
              {
                "x": -11,
                "y": -8
              },
              {
                "x": -9,
                "y": -9
              },
              {
                "x": -9,
                "y": -8
              },
              {
                "x": -9,
                "y": -10
              }
            ],
            "x": -10,
            "y": -9
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -10
              },
              {
                "x": 9,
                "y": -9
              },
              {
                "x": 11,
                "y": -10
              },
              {
                "x": 11,
                "y": -8
              },
              {
                "x": 10,
                "y": -11
              },
              {
                "x": 8,
                "y": -9
              }
            ],
            "x": 10,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 8
              },
              {
                "x": -16,
                "y": 9
              },
              {
                "x": -16,
                "y": 7
              },
              {
                "x": -14,
                "y": 8
              },
              {
                "x": -16,
                "y": 6
              },
              {
                "x": -16,
                "y": 10
              }
            ],
            "x": -16,
            "y": 8
          },
          {
            "edges": [
              {
                "x": -15,
                "y": -9
              },
              {
                "x": -14,
                "y": -11
              },
              {
                "x": -15,
                "y": -11
              },
              {
                "x": -16,
                "y": -10
              },
              {
                "x": -14,
                "y": -10
              },
              {
                "x": -14,
                "y": -9
              }
            ],
            "x": -15,
            "y": -10
          },
          {
            "edges": [
              {
                "x": -14,
                "y": -15
              },
              {
                "x": -16,
                "y": -15
              },
              {
                "x": -16,
                "y": -16
              },
              {
                "x": -14,
                "y": -16
              },
              {
                "x": -13,
                "y": -16
              }
            ],
            "x": -15,
            "y": -16
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 14
              },
              {
                "x": 12,
                "y": 15
              },
              {
                "x": 15,
                "y": 15
              },
              {
                "x": 12,
                "y": 14
              },
              {
                "x": 13,
                "y": 13
              }
            ],
            "x": 13,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 0,
                "y": 12
              },
              {
                "x": -1,
                "y": 11
              },
              {
                "x": -2,
                "y": 13
              },
              {
                "x": -1,
                "y": 13
              },
              {
                "x": -2,
                "y": 11
              },
              {
                "x": 0,
                "y": 13
              }
            ],
            "x": -1,
            "y": 12
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 6
              },
              {
                "x": 9,
                "y": 5
              },
              {
                "x": 8,
                "y": 6
              },
              {
                "x": 8,
                "y": 7
              },
              {
                "x": 10,
                "y": 5
              }
            ],
            "x": 9,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -12,
                "y": 2
              },
              {
                "x": -14,
                "y": 3
              },
              {
                "x": -11,
                "y": 3
              },
              {
                "x": -13,
                "y": 4
              },
              {
                "x": -14,
                "y": 2
              },
              {
                "x": -12,
                "y": 4
              }
            ],
            "x": -13,
            "y": 3
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -1
              },
              {
                "x": 2,
                "y": 1
              },
              {
                "x": 4,
                "y": 0
              },
              {
                "x": 2,
                "y": -1
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 3,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 2
              },
              {
                "x": -2,
                "y": 3
              },
              {
                "x": -3,
                "y": 4
              },
              {
                "x": -4,
                "y": 3
              },
              {
                "x": -4,
                "y": 4
              },
              {
                "x": -2,
                "y": 2
              }
            ],
            "x": -3,
            "y": 3
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -6
              },
              {
                "x": 5,
                "y": -6
              },
              {
                "x": 7,
                "y": -7
              },
              {
                "x": 5,
                "y": -7
              },
              {
                "x": 4,
                "y": -6
              }
            ],
            "x": 6,
            "y": -6
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -8
              },
              {
                "x": 1,
                "y": -7
              },
              {
                "x": 2,
                "y": -8
              },
              {
                "x": 1,
                "y": -8
              },
              {
                "x": 2,
                "y": -9
              }
            ],
            "x": 2,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -16,
                "y": -14
              },
              {
                "x": -16,
                "y": -15
              },
              {
                "x": -15,
                "y": -16
              },
              {
                "x": -14,
                "y": -16
              },
              {
                "x": -14,
                "y": -15
              }
            ],
            "x": -16,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 15
              },
              {
                "x": -16,
                "y": 13
              },
              {
                "x": -15,
                "y": 14
              },
              {
                "x": -15,
                "y": 13
              },
              {
                "x": -15,
                "y": 15
              }
            ],
            "x": -16,
            "y": 14
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 4
              },
              {
                "x": 9,
                "y": 4
              },
              {
                "x": 7,
                "y": 6
              },
              {
                "x": 9,
                "y": 5
              },
              {
                "x": 8,
                "y": 6
              }
            ],
            "x": 8,
            "y": 5
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 8
              },
              {
                "x": -16,
                "y": 6
              },
              {
                "x": -15,
                "y": 8
              },
              {
                "x": -15,
                "y": 6
              },
              {
                "x": -14,
                "y": 7
              }
            ],
            "x": -16,
            "y": 7
          },
          {
            "edges": [
              {
                "x": -4,
                "y": 11
              },
              {
                "x": -4,
                "y": 12
              },
              {
                "x": -2,
                "y": 11
              },
              {
                "x": -3,
                "y": 10
              },
              {
                "x": -4,
                "y": 10
              }
            ],
            "x": -3,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -2,
                "y": 3
              },
              {
                "x": -3,
                "y": 4
              },
              {
                "x": -1,
                "y": 4
              },
              {
                "x": -2,
                "y": 5
              },
              {
                "x": -1,
                "y": 5
              }
            ],
            "x": -2,
            "y": 4
          },
          {
            "edges": [
              {
                "x": 11,
                "y": 8
              },
              {
                "x": 13,
                "y": 8
              },
              {
                "x": 11,
                "y": 9
              },
              {
                "x": 12,
                "y": 10
              },
              {
                "x": 12,
                "y": 8
              },
              {
                "x": 11,
                "y": 10
              }
            ],
            "x": 12,
            "y": 9
          },
          {
            "edges": [
              {
                "x": 0,
                "y": 3
              },
              {
                "x": 1,
                "y": 3
              },
              {
                "x": 1,
                "y": 4
              },
              {
                "x": -1,
                "y": 4
              },
              {
                "x": 0,
                "y": 5
              }
            ],
            "x": 0,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -12,
                "y": 5
              },
              {
                "x": -14,
                "y": 3
              },
              {
                "x": -13,
                "y": 3
              },
              {
                "x": -12,
                "y": 4
              },
              {
                "x": -13,
                "y": 5
              },
              {
                "x": -13,
                "y": 6
              }
            ],
            "x": -13,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -12,
                "y": 10
              },
              {
                "x": -11,
                "y": 10
              },
              {
                "x": -12,
                "y": 8
              },
              {
                "x": -13,
                "y": 9
              },
              {
                "x": -13,
                "y": 10
              }
            ],
            "x": -12,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -10
              },
              {
                "x": 0,
                "y": -9
              },
              {
                "x": 1,
                "y": -10
              },
              {
                "x": 1,
                "y": -9
              },
              {
                "x": -1,
                "y": -11
              },
              {
                "x": 1,
                "y": -11
              }
            ],
            "x": 0,
            "y": -10
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 6
              },
              {
                "x": -7,
                "y": 8
              },
              {
                "x": -9,
                "y": 7
              },
              {
                "x": -6,
                "y": 7
              },
              {
                "x": -8,
                "y": 9
              }
            ],
            "x": -7,
            "y": 7
          },
          {
            "edges": [
              {
                "x": 14,
                "y": -1
              },
              {
                "x": 15,
                "y": -1
              },
              {
                "x": 15,
                "y": 1
              },
              {
                "x": 14,
                "y": 0
              },
              {
                "x": 13,
                "y": 0
              }
            ],
            "x": 15,
            "y": 0
          },
          {
            "edges": [
              {
                "x": 0,
                "y": 3
              },
              {
                "x": -1,
                "y": 5
              },
              {
                "x": -2,
                "y": 4
              },
              {
                "x": 0,
                "y": 4
              },
              {
                "x": -2,
                "y": 3
              }
            ],
            "x": -1,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -14,
                "y": 12
              },
              {
                "x": -13,
                "y": 14
              },
              {
                "x": -15,
                "y": 13
              },
              {
                "x": -13,
                "y": 13
              },
              {
                "x": -14,
                "y": 14
              },
              {
                "x": -15,
                "y": 12
              }
            ],
            "x": -14,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -7
              },
              {
                "x": -1,
                "y": -6
              },
              {
                "x": 0,
                "y": -7
              },
              {
                "x": 1,
                "y": -7
              },
              {
                "x": 1,
                "y": -5
              }
            ],
            "x": 0,
            "y": -6
          },
          {
            "edges": [
              {
                "x": -3,
                "y": -8
              },
              {
                "x": -2,
                "y": -10
              },
              {
                "x": -3,
                "y": -10
              },
              {
                "x": -3,
                "y": -9
              },
              {
                "x": -1,
                "y": -8
              },
              {
                "x": -1,
                "y": -9
              },
              {
                "x": -1,
                "y": -10
              }
            ],
            "x": -2,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -10,
                "y": -2
              },
              {
                "x": -11,
                "y": -3
              },
              {
                "x": -10,
                "y": -3
              },
              {
                "x": -12,
                "y": -2
              },
              {
                "x": -12,
                "y": -3
              },
              {
                "x": -10,
                "y": -1
              }
            ],
            "x": -11,
            "y": -2
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -4
              },
              {
                "x": 14,
                "y": -4
              },
              {
                "x": 13,
                "y": -3
              },
              {
                "x": 12,
                "y": -4
              },
              {
                "x": 14,
                "y": -3
              },
              {
                "x": 14,
                "y": -5
              },
              {
                "x": 12,
                "y": -5
              },
              {
                "x": 12,
                "y": -3
              }
            ],
            "x": 13,
            "y": -4
          },
          {
            "edges": [
              {
                "x": 1,
                "y": -4
              },
              {
                "x": 3,
                "y": -5
              },
              {
                "x": 0,
                "y": -6
              },
              {
                "x": 1,
                "y": -7
              },
              {
                "x": 2,
                "y": -3
              }
            ],
            "x": 1,
            "y": -5
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 0
              },
              {
                "x": -1,
                "y": 0
              },
              {
                "x": 1,
                "y": -2
              },
              {
                "x": -1,
                "y": -2
              },
              {
                "x": -1,
                "y": -1
              },
              {
                "x": 0,
                "y": -2
              }
            ],
            "x": 0,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -14,
                "y": 7
              },
              {
                "x": -14,
                "y": 6
              },
              {
                "x": -13,
                "y": 5
              },
              {
                "x": -12,
                "y": 5
              },
              {
                "x": -13,
                "y": 4
              }
            ],
            "x": -13,
            "y": 6
          },
          {
            "edges": [
              {
                "x": 1,
                "y": -15
              },
              {
                "x": 0,
                "y": -15
              },
              {
                "x": 0,
                "y": -13
              },
              {
                "x": 0,
                "y": -14
              },
              {
                "x": 2,
                "y": -14
              },
              {
                "x": 2,
                "y": -15
              },
              {
                "x": 2,
                "y": -13
              }
            ],
            "x": 1,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -9
              },
              {
                "x": 7,
                "y": -6
              },
              {
                "x": 7,
                "y": -7
              },
              {
                "x": 8,
                "y": -8
              },
              {
                "x": 6,
                "y": -8
              },
              {
                "x": 8,
                "y": -9
              }
            ],
            "x": 7,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -16,
                "y": 15
              },
              {
                "x": -15,
                "y": 14
              },
              {
                "x": -16,
                "y": 14
              },
              {
                "x": -14,
                "y": 14
              },
              {
                "x": -15,
                "y": 13
              }
            ],
            "x": -15,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -7,
                "y": -3
              },
              {
                "x": -8,
                "y": -3
              },
              {
                "x": -9,
                "y": -4
              },
              {
                "x": -9,
                "y": -3
              },
              {
                "x": -9,
                "y": -2
              }
            ],
            "x": -8,
            "y": -4
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -6
              },
              {
                "x": 12,
                "y": -4
              },
              {
                "x": 10,
                "y": -5
              },
              {
                "x": 12,
                "y": -5
              },
              {
                "x": 10,
                "y": -4
              }
            ],
            "x": 11,
            "y": -5
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 10
              },
              {
                "x": 0,
                "y": 10
              },
              {
                "x": 0,
                "y": 12
              },
              {
                "x": -1,
                "y": 11
              },
              {
                "x": 1,
                "y": 11
              }
            ],
            "x": 0,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 13,
                "y": -8
              },
              {
                "x": 12,
                "y": -7
              },
              {
                "x": 14,
                "y": -7
              },
              {
                "x": 14,
                "y": -8
              },
              {
                "x": 12,
                "y": -8
              },
              {
                "x": 14,
                "y": -6
              }
            ],
            "x": 13,
            "y": -7
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -5
              },
              {
                "x": 9,
                "y": -7
              },
              {
                "x": 9,
                "y": -5
              },
              {
                "x": 10,
                "y": -7
              },
              {
                "x": 11,
                "y": -6
              }
            ],
            "x": 9,
            "y": -6
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -1
              },
              {
                "x": 5,
                "y": 0
              },
              {
                "x": 3,
                "y": 0
              },
              {
                "x": 5,
                "y": -1
              },
              {
                "x": 5,
                "y": 1
              }
            ],
            "x": 4,
            "y": 0
          },
          {
            "edges": [
              {
                "x": 13,
                "y": -11
              },
              {
                "x": 13,
                "y": -12
              },
              {
                "x": 15,
                "y": -10
              },
              {
                "x": 15,
                "y": -12
              },
              {
                "x": 15,
                "y": -13
              },
              {
                "x": 14,
                "y": -10
              }
            ],
            "x": 14,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -11
              },
              {
                "x": 8,
                "y": -12
              },
              {
                "x": 9,
                "y": -12
              },
              {
                "x": 10,
                "y": -10
              },
              {
                "x": 9,
                "y": -9
              }
            ],
            "x": 9,
            "y": -11
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -1
              },
              {
                "x": -12,
                "y": -3
              },
              {
                "x": -12,
                "y": -1
              },
              {
                "x": -11,
                "y": -2
              },
              {
                "x": -13,
                "y": -3
              }
            ],
            "x": -12,
            "y": -2
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 5
              },
              {
                "x": 11,
                "y": 6
              },
              {
                "x": 11,
                "y": 5
              },
              {
                "x": 12,
                "y": 4
              },
              {
                "x": 13,
                "y": 5
              }
            ],
            "x": 12,
            "y": 5
          },
          {
            "edges": [
              {
                "x": 8,
                "y": -14
              },
              {
                "x": 8,
                "y": -13
              },
              {
                "x": 9,
                "y": -16
              },
              {
                "x": 10,
                "y": -15
              },
              {
                "x": 8,
                "y": -15
              },
              {
                "x": 10,
                "y": -13
              }
            ],
            "x": 9,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 6
              },
              {
                "x": 6,
                "y": 7
              },
              {
                "x": 6,
                "y": 5
              },
              {
                "x": 5,
                "y": 6
              },
              {
                "x": 5,
                "y": 5
              }
            ],
            "x": 6,
            "y": 6
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -4
              },
              {
                "x": 9,
                "y": -3
              },
              {
                "x": 10,
                "y": -2
              },
              {
                "x": 11,
                "y": -3
              },
              {
                "x": 9,
                "y": -2
              },
              {
                "x": 11,
                "y": -2
              }
            ],
            "x": 10,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -4,
                "y": -2
              },
              {
                "x": -4,
                "y": -3
              },
              {
                "x": -2,
                "y": -3
              },
              {
                "x": -3,
                "y": -4
              },
              {
                "x": -3,
                "y": 0
              }
            ],
            "x": -3,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 14
              },
              {
                "x": -15,
                "y": 14
              },
              {
                "x": -13,
                "y": 13
              },
              {
                "x": -14,
                "y": 13
              },
              {
                "x": -15,
                "y": 15
              },
              {
                "x": -15,
                "y": 13
              },
              {
                "x": -13,
                "y": 15
              }
            ],
            "x": -14,
            "y": 14
          },
          {
            "edges": [
              {
                "x": 5,
                "y": 8
              },
              {
                "x": 7,
                "y": 8
              },
              {
                "x": 7,
                "y": 6
              },
              {
                "x": 6,
                "y": 6
              },
              {
                "x": 6,
                "y": 8
              },
              {
                "x": 5,
                "y": 6
              }
            ],
            "x": 6,
            "y": 7
          },
          {
            "edges": [
              {
                "x": -2,
                "y": 13
              },
              {
                "x": -3,
                "y": 13
              },
              {
                "x": -4,
                "y": 14
              },
              {
                "x": -3,
                "y": 15
              },
              {
                "x": -4,
                "y": 13
              },
              {
                "x": -4,
                "y": 15
              },
              {
                "x": -2,
                "y": 15
              }
            ],
            "x": -3,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -14,
                "y": -11
              },
              {
                "x": -12,
                "y": -11
              },
              {
                "x": -11,
                "y": -11
              },
              {
                "x": -13,
                "y": -12
              },
              {
                "x": -14,
                "y": -12
              },
              {
                "x": -14,
                "y": -10
              },
              {
                "x": -12,
                "y": -12
              }
            ],
            "x": -13,
            "y": -11
          },
          {
            "edges": [
              {
                "x": 4,
                "y": 3
              },
              {
                "x": 5,
                "y": 3
              },
              {
                "x": 6,
                "y": 4
              },
              {
                "x": 5,
                "y": 5
              },
              {
                "x": 4,
                "y": 5
              }
            ],
            "x": 5,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 14
              },
              {
                "x": -4,
                "y": 15
              },
              {
                "x": -2,
                "y": 15
              },
              {
                "x": -4,
                "y": 14
              },
              {
                "x": -5,
                "y": 15
              }
            ],
            "x": -3,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 4,
                "y": -4
              },
              {
                "x": 4,
                "y": -3
              },
              {
                "x": 5,
                "y": -2
              },
              {
                "x": 3,
                "y": -2
              },
              {
                "x": 5,
                "y": -1
              },
              {
                "x": 3,
                "y": -1
              }
            ],
            "x": 4,
            "y": -2
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -9
              },
              {
                "x": 9,
                "y": -9
              },
              {
                "x": 7,
                "y": -8
              },
              {
                "x": 8,
                "y": -8
              },
              {
                "x": 10,
                "y": -9
              }
            ],
            "x": 8,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -4
              },
              {
                "x": -6,
                "y": -6
              },
              {
                "x": -5,
                "y": -5
              },
              {
                "x": -6,
                "y": -3
              },
              {
                "x": -6,
                "y": -7
              }
            ],
            "x": -6,
            "y": -5
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 12
              },
              {
                "x": 3,
                "y": 11
              },
              {
                "x": 3,
                "y": 13
              },
              {
                "x": 5,
                "y": 12
              },
              {
                "x": 4,
                "y": 14
              },
              {
                "x": 4,
                "y": 10
              }
            ],
            "x": 4,
            "y": 12
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 4
              },
              {
                "x": 7,
                "y": 1
              },
              {
                "x": 6,
                "y": 4
              },
              {
                "x": 9,
                "y": 3
              },
              {
                "x": 5,
                "y": 3
              }
            ],
            "x": 7,
            "y": 3
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 15
              },
              {
                "x": 4,
                "y": 14
              },
              {
                "x": 3,
                "y": 15
              },
              {
                "x": 7,
                "y": 14
              },
              {
                "x": 3,
                "y": 13
              }
            ],
            "x": 5,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -7,
                "y": 11
              },
              {
                "x": -9,
                "y": 11
              },
              {
                "x": -8,
                "y": 11
              },
              {
                "x": -8,
                "y": 13
              },
              {
                "x": -9,
                "y": 13
              }
            ],
            "x": -8,
            "y": 12
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -12
              },
              {
                "x": 2,
                "y": -12
              },
              {
                "x": 2,
                "y": -14
              },
              {
                "x": 3,
                "y": -14
              },
              {
                "x": 1,
                "y": -14
              }
            ],
            "x": 2,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 4
              },
              {
                "x": 6,
                "y": 6
              },
              {
                "x": 6,
                "y": 4
              },
              {
                "x": 5,
                "y": 5
              },
              {
                "x": 7,
                "y": 6
              }
            ],
            "x": 6,
            "y": 5
          },
          {
            "edges": [
              {
                "x": -4,
                "y": -15
              },
              {
                "x": -1,
                "y": -16
              },
              {
                "x": -3,
                "y": -14
              },
              {
                "x": -1,
                "y": -15
              },
              {
                "x": -2,
                "y": -14
              }
            ],
            "x": -3,
            "y": -16
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 15
              },
              {
                "x": 1,
                "y": 15
              },
              {
                "x": 3,
                "y": 13
              },
              {
                "x": 2,
                "y": 13
              },
              {
                "x": 1,
                "y": 14
              },
              {
                "x": 2,
                "y": 15
              },
              {
                "x": 4,
                "y": 14
              }
            ],
            "x": 2,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 11
              },
              {
                "x": -12,
                "y": 10
              },
              {
                "x": -14,
                "y": 9
              },
              {
                "x": -12,
                "y": 9
              },
              {
                "x": -13,
                "y": 9
              }
            ],
            "x": -13,
            "y": 10
          },
          {
            "edges": [
              {
                "x": 5,
                "y": -7
              },
              {
                "x": 3,
                "y": -8
              },
              {
                "x": 4,
                "y": -8
              },
              {
                "x": 5,
                "y": -6
              },
              {
                "x": 4,
                "y": -6
              },
              {
                "x": 5,
                "y": -8
              }
            ],
            "x": 4,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -12
              },
              {
                "x": -1,
                "y": -10
              },
              {
                "x": -2,
                "y": -10
              },
              {
                "x": 0,
                "y": -12
              },
              {
                "x": 0,
                "y": -10
              }
            ],
            "x": -1,
            "y": -11
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 6
              },
              {
                "x": -11,
                "y": 4
              },
              {
                "x": -10,
                "y": 5
              },
              {
                "x": -12,
                "y": 5
              },
              {
                "x": -12,
                "y": 4
              }
            ],
            "x": -11,
            "y": 5
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 7
              },
              {
                "x": 0,
                "y": 8
              },
              {
                "x": 0,
                "y": 6
              },
              {
                "x": -1,
                "y": 8
              },
              {
                "x": -1,
                "y": 6
              },
              {
                "x": 1,
                "y": 6
              }
            ],
            "x": 0,
            "y": 7
          },
          {
            "edges": [
              {
                "x": -9,
                "y": -16
              },
              {
                "x": -10,
                "y": -15
              },
              {
                "x": -12,
                "y": -16
              },
              {
                "x": -11,
                "y": -16
              },
              {
                "x": -9,
                "y": -15
              },
              {
                "x": -10,
                "y": -14
              }
            ],
            "x": -10,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 14
              },
              {
                "x": -5,
                "y": 15
              },
              {
                "x": -4,
                "y": 14
              },
              {
                "x": -3,
                "y": 15
              },
              {
                "x": -3,
                "y": 14
              },
              {
                "x": -2,
                "y": 15
              }
            ],
            "x": -4,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -6
              },
              {
                "x": 12,
                "y": -8
              },
              {
                "x": 11,
                "y": -7
              },
              {
                "x": 13,
                "y": -7
              },
              {
                "x": 13,
                "y": -8
              },
              {
                "x": 11,
                "y": -8
              }
            ],
            "x": 12,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 1
              },
              {
                "x": -15,
                "y": -1
              },
              {
                "x": -16,
                "y": 0
              },
              {
                "x": -13,
                "y": 0
              },
              {
                "x": -14,
                "y": 1
              },
              {
                "x": -15,
                "y": 1
              },
              {
                "x": -14,
                "y": -1
              }
            ],
            "x": -14,
            "y": 0
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -9
              },
              {
                "x": 4,
                "y": -10
              },
              {
                "x": 3,
                "y": -11
              },
              {
                "x": 1,
                "y": -10
              },
              {
                "x": 1,
                "y": -9
              },
              {
                "x": 1,
                "y": -11
              }
            ],
            "x": 2,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 13,
                "y": -1
              },
              {
                "x": 13,
                "y": -3
              },
              {
                "x": 14,
                "y": -3
              },
              {
                "x": 14,
                "y": -1
              },
              {
                "x": 12,
                "y": -3
              }
            ],
            "x": 13,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 14
              },
              {
                "x": -12,
                "y": 15
              },
              {
                "x": -12,
                "y": 14
              },
              {
                "x": -14,
                "y": 14
              },
              {
                "x": -11,
                "y": 15
              }
            ],
            "x": -13,
            "y": 15
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 8
              },
              {
                "x": 4,
                "y": 10
              },
              {
                "x": 2,
                "y": 10
              },
              {
                "x": 4,
                "y": 9
              },
              {
                "x": 4,
                "y": 8
              }
            ],
            "x": 3,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -15
              },
              {
                "x": -10,
                "y": -15
              },
              {
                "x": -12,
                "y": -16
              },
              {
                "x": -10,
                "y": -16
              },
              {
                "x": -13,
                "y": -16
              }
            ],
            "x": -11,
            "y": -16
          },
          {
            "edges": [
              {
                "x": 12,
                "y": -8
              },
              {
                "x": 11,
                "y": -7
              },
              {
                "x": 10,
                "y": -9
              },
              {
                "x": 12,
                "y": -7
              },
              {
                "x": 10,
                "y": -7
              }
            ],
            "x": 11,
            "y": -8
          },
          {
            "edges": [
              {
                "x": 8,
                "y": -3
              },
              {
                "x": 9,
                "y": -3
              },
              {
                "x": 8,
                "y": -2
              },
              {
                "x": 9,
                "y": -1
              },
              {
                "x": 10,
                "y": -2
              },
              {
                "x": 10,
                "y": -3
              },
              {
                "x": 10,
                "y": -1
              }
            ],
            "x": 9,
            "y": -2
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 5
              },
              {
                "x": 1,
                "y": 5
              },
              {
                "x": 0,
                "y": 6
              },
              {
                "x": 0,
                "y": 4
              },
              {
                "x": -1,
                "y": 6
              },
              {
                "x": 1,
                "y": 6
              }
            ],
            "x": 0,
            "y": 5
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 6
              },
              {
                "x": -10,
                "y": 7
              },
              {
                "x": -12,
                "y": 8
              },
              {
                "x": -10,
                "y": 8
              },
              {
                "x": -9,
                "y": 7
              }
            ],
            "x": -11,
            "y": 7
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 15
              },
              {
                "x": -7,
                "y": 15
              },
              {
                "x": -8,
                "y": 14
              },
              {
                "x": -10,
                "y": 15
              },
              {
                "x": -9,
                "y": 14
              },
              {
                "x": -8,
                "y": 13
              }
            ],
            "x": -8,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -12,
                "y": 14
              },
              {
                "x": -11,
                "y": 15
              },
              {
                "x": -13,
                "y": 15
              },
              {
                "x": -13,
                "y": 14
              },
              {
                "x": -10,
                "y": 15
              }
            ],
            "x": -12,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 3
              },
              {
                "x": -5,
                "y": 3
              },
              {
                "x": -6,
                "y": 1
              },
              {
                "x": -4,
                "y": 2
              },
              {
                "x": -5,
                "y": 1
              },
              {
                "x": -6,
                "y": 2
              }
            ],
            "x": -5,
            "y": 2
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 4
              },
              {
                "x": -8,
                "y": 5
              },
              {
                "x": -6,
                "y": 4
              },
              {
                "x": -6,
                "y": 3
              },
              {
                "x": -10,
                "y": 5
              }
            ],
            "x": -8,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -16,
                "y": -14
              },
              {
                "x": -14,
                "y": -13
              },
              {
                "x": -16,
                "y": -13
              },
              {
                "x": -14,
                "y": -15
              },
              {
                "x": -16,
                "y": -15
              }
            ],
            "x": -15,
            "y": -14
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 5
              },
              {
                "x": -16,
                "y": 4
              },
              {
                "x": -16,
                "y": 8
              },
              {
                "x": -16,
                "y": 7
              },
              {
                "x": -15,
                "y": 6
              },
              {
                "x": -14,
                "y": 6
              }
            ],
            "x": -16,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 14
              },
              {
                "x": -5,
                "y": 14
              },
              {
                "x": -5,
                "y": 12
              },
              {
                "x": -4,
                "y": 13
              },
              {
                "x": -6,
                "y": 11
              }
            ],
            "x": -6,
            "y": 13
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -8
              },
              {
                "x": -7,
                "y": -8
              },
              {
                "x": -6,
                "y": -6
              },
              {
                "x": -5,
                "y": -7
              },
              {
                "x": -7,
                "y": -7
              },
              {
                "x": -6,
                "y": -5
              }
            ],
            "x": -6,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -4,
                "y": -6
              },
              {
                "x": -3,
                "y": -8
              },
              {
                "x": -4,
                "y": -7
              },
              {
                "x": -3,
                "y": -6
              },
              {
                "x": -1,
                "y": -7
              }
            ],
            "x": -3,
            "y": -7
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -9
              },
              {
                "x": 5,
                "y": -9
              },
              {
                "x": 6,
                "y": -10
              },
              {
                "x": 6,
                "y": -8
              },
              {
                "x": 5,
                "y": -8
              },
              {
                "x": 5,
                "y": -10
              }
            ],
            "x": 6,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -3,
                "y": -12
              },
              {
                "x": -4,
                "y": -10
              },
              {
                "x": -5,
                "y": -11
              },
              {
                "x": -5,
                "y": -10
              },
              {
                "x": -3,
                "y": -10
              }
            ],
            "x": -4,
            "y": -11
          },
          {
            "edges": [
              {
                "x": -8,
                "y": 9
              },
              {
                "x": -10,
                "y": 10
              },
              {
                "x": -9,
                "y": 8
              },
              {
                "x": -10,
                "y": 8
              },
              {
                "x": -11,
                "y": 10
              },
              {
                "x": -10,
                "y": 7
              }
            ],
            "x": -10,
            "y": 9
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 2
              },
              {
                "x": 9,
                "y": 3
              },
              {
                "x": 11,
                "y": 2
              },
              {
                "x": 11,
                "y": 1
              },
              {
                "x": 12,
                "y": 2
              }
            ],
            "x": 10,
            "y": 2
          },
          {
            "edges": [
              {
                "x": -2,
                "y": -13
              },
              {
                "x": -1,
                "y": -12
              },
              {
                "x": 0,
                "y": -13
              },
              {
                "x": 0,
                "y": -12
              },
              {
                "x": -1,
                "y": -14
              }
            ],
            "x": -1,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 11,
                "y": 10
              },
              {
                "x": 13,
                "y": 10
              },
              {
                "x": 12,
                "y": 11
              },
              {
                "x": 12,
                "y": 9
              },
              {
                "x": 11,
                "y": 9
              }
            ],
            "x": 12,
            "y": 10
          },
          {
            "edges": [
              {
                "x": 4,
                "y": 6
              },
              {
                "x": 6,
                "y": 6
              },
              {
                "x": 5,
                "y": 5
              },
              {
                "x": 4,
                "y": 5
              },
              {
                "x": 6,
                "y": 7
              }
            ],
            "x": 5,
            "y": 6
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 13
              },
              {
                "x": 9,
                "y": 11
              },
              {
                "x": 8,
                "y": 12
              },
              {
                "x": 10,
                "y": 12
              },
              {
                "x": 8,
                "y": 13
              },
              {
                "x": 8,
                "y": 11
              },
              {
                "x": 10,
                "y": 11
              }
            ],
            "x": 9,
            "y": 12
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 7
              },
              {
                "x": 11,
                "y": 8
              },
              {
                "x": 13,
                "y": 8
              },
              {
                "x": 12,
                "y": 9
              },
              {
                "x": 11,
                "y": 7
              }
            ],
            "x": 12,
            "y": 8
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 6
              },
              {
                "x": -4,
                "y": 7
              },
              {
                "x": -6,
                "y": 5
              },
              {
                "x": -4,
                "y": 5
              },
              {
                "x": -6,
                "y": 7
              }
            ],
            "x": -5,
            "y": 6
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -16
              },
              {
                "x": 15,
                "y": -14
              },
              {
                "x": 14,
                "y": -16
              },
              {
                "x": 15,
                "y": -15
              },
              {
                "x": 12,
                "y": -15
              },
              {
                "x": 12,
                "y": -14
              },
              {
                "x": 12,
                "y": -13
              },
              {
                "x": 11,
                "y": -14
              }
            ],
            "x": 13,
            "y": -14
          },
          {
            "edges": [
              {
                "x": -3,
                "y": 6
              },
              {
                "x": -2,
                "y": 7
              },
              {
                "x": -1,
                "y": 6
              },
              {
                "x": -2,
                "y": 5
              },
              {
                "x": -1,
                "y": 7
              }
            ],
            "x": -2,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -14,
                "y": 8
              },
              {
                "x": -12,
                "y": 8
              },
              {
                "x": -14,
                "y": 9
              },
              {
                "x": -12,
                "y": 9
              },
              {
                "x": -13,
                "y": 10
              },
              {
                "x": -12,
                "y": 10
              }
            ],
            "x": -13,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 9
              },
              {
                "x": -4,
                "y": 10
              },
              {
                "x": -6,
                "y": 11
              },
              {
                "x": -5,
                "y": 11
              },
              {
                "x": -4,
                "y": 9
              },
              {
                "x": -4,
                "y": 11
              }
            ],
            "x": -5,
            "y": 10
          },
          {
            "edges": [
              {
                "x": 5,
                "y": 8
              },
              {
                "x": 3,
                "y": 8
              },
              {
                "x": 4,
                "y": 10
              },
              {
                "x": 5,
                "y": 9
              },
              {
                "x": 3,
                "y": 9
              },
              {
                "x": 4,
                "y": 8
              },
              {
                "x": 5,
                "y": 10
              }
            ],
            "x": 4,
            "y": 9
          },
          {
            "edges": [
              {
                "x": 14,
                "y": -8
              },
              {
                "x": 15,
                "y": -8
              },
              {
                "x": 13,
                "y": -7
              },
              {
                "x": 14,
                "y": -6
              },
              {
                "x": 15,
                "y": -7
              }
            ],
            "x": 14,
            "y": -7
          },
          {
            "edges": [
              {
                "x": 4,
                "y": -10
              },
              {
                "x": 5,
                "y": -12
              },
              {
                "x": 5,
                "y": -9
              },
              {
                "x": 6,
                "y": -10
              },
              {
                "x": 6,
                "y": -9
              },
              {
                "x": 5,
                "y": -8
              }
            ],
            "x": 5,
            "y": -10
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -16
              },
              {
                "x": -14,
                "y": -15
              },
              {
                "x": -15,
                "y": -16
              },
              {
                "x": -16,
                "y": -16
              },
              {
                "x": -12,
                "y": -16
              }
            ],
            "x": -14,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -12,
                "y": 2
              },
              {
                "x": -15,
                "y": 3
              },
              {
                "x": -14,
                "y": 3
              },
              {
                "x": -14,
                "y": 1
              },
              {
                "x": -15,
                "y": 1
              },
              {
                "x": -13,
                "y": 3
              },
              {
                "x": -13,
                "y": 1
              }
            ],
            "x": -14,
            "y": 2
          },
          {
            "edges": [
              {
                "x": -7,
                "y": 11
              },
              {
                "x": -8,
                "y": 9
              },
              {
                "x": -9,
                "y": 11
              },
              {
                "x": -8,
                "y": 12
              },
              {
                "x": -10,
                "y": 11
              }
            ],
            "x": -8,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 13
              },
              {
                "x": -9,
                "y": 15
              },
              {
                "x": -10,
                "y": 14
              },
              {
                "x": -8,
                "y": 14
              },
              {
                "x": -10,
                "y": 15
              },
              {
                "x": -8,
                "y": 15
              },
              {
                "x": -8,
                "y": 13
              }
            ],
            "x": -9,
            "y": 14
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -7
              },
              {
                "x": 1,
                "y": -7
              },
              {
                "x": -1,
                "y": -6
              },
              {
                "x": 0,
                "y": -8
              },
              {
                "x": 0,
                "y": -6
              }
            ],
            "x": 0,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 6
              },
              {
                "x": -7,
                "y": 8
              },
              {
                "x": -7,
                "y": 7
              },
              {
                "x": -5,
                "y": 6
              },
              {
                "x": -4,
                "y": 7
              }
            ],
            "x": -6,
            "y": 7
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -11
              },
              {
                "x": -11,
                "y": -11
              },
              {
                "x": -13,
                "y": -12
              },
              {
                "x": -13,
                "y": -13
              },
              {
                "x": -13,
                "y": -11
              }
            ],
            "x": -12,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 13,
                "y": -3
              },
              {
                "x": 12,
                "y": -4
              },
              {
                "x": 13,
                "y": -2
              },
              {
                "x": 11,
                "y": -3
              },
              {
                "x": 13,
                "y": -4
              }
            ],
            "x": 12,
            "y": -3
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 7
              },
              {
                "x": 4,
                "y": 6
              },
              {
                "x": 3,
                "y": 8
              },
              {
                "x": 4,
                "y": 8
              },
              {
                "x": 5,
                "y": 8
              }
            ],
            "x": 4,
            "y": 7
          },
          {
            "edges": [
              {
                "x": -9,
                "y": -7
              },
              {
                "x": -9,
                "y": -9
              },
              {
                "x": -10,
                "y": -7
              },
              {
                "x": -9,
                "y": -6
              },
              {
                "x": -8,
                "y": -8
              },
              {
                "x": -10,
                "y": -9
              },
              {
                "x": -8,
                "y": -7
              }
            ],
            "x": -9,
            "y": -8
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -1
              },
              {
                "x": 10,
                "y": 0
              },
              {
                "x": 11,
                "y": 1
              },
              {
                "x": 12,
                "y": 0
              },
              {
                "x": 10,
                "y": -1
              }
            ],
            "x": 11,
            "y": 0
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -9
              },
              {
                "x": 9,
                "y": -9
              },
              {
                "x": 7,
                "y": -7
              },
              {
                "x": 9,
                "y": -7
              },
              {
                "x": 7,
                "y": -8
              },
              {
                "x": 8,
                "y": -9
              }
            ],
            "x": 8,
            "y": -8
          },
          {
            "edges": [
              {
                "x": 6,
                "y": -2
              },
              {
                "x": 5,
                "y": -1
              },
              {
                "x": 6,
                "y": -3
              },
              {
                "x": 4,
                "y": -3
              },
              {
                "x": 4,
                "y": -2
              },
              {
                "x": 6,
                "y": -1
              }
            ],
            "x": 5,
            "y": -2
          },
          {
            "edges": [
              {
                "x": 4,
                "y": -10
              },
              {
                "x": 4,
                "y": -8
              },
              {
                "x": 5,
                "y": -8
              },
              {
                "x": 6,
                "y": -9
              },
              {
                "x": 5,
                "y": -10
              },
              {
                "x": 6,
                "y": -10
              }
            ],
            "x": 5,
            "y": -9
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -10
              },
              {
                "x": -10,
                "y": -10
              },
              {
                "x": -10,
                "y": -11
              },
              {
                "x": -9,
                "y": -9
              },
              {
                "x": -10,
                "y": -9
              }
            ],
            "x": -9,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 8,
                "y": 7
              },
              {
                "x": 7,
                "y": 6
              },
              {
                "x": 9,
                "y": 6
              },
              {
                "x": 8,
                "y": 5
              },
              {
                "x": 9,
                "y": 5
              }
            ],
            "x": 8,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -10,
                "y": -7
              },
              {
                "x": -9,
                "y": -6
              },
              {
                "x": -11,
                "y": -6
              },
              {
                "x": -9,
                "y": -7
              },
              {
                "x": -12,
                "y": -5
              }
            ],
            "x": -10,
            "y": -6
          },
          {
            "edges": [
              {
                "x": -7,
                "y": 0
              },
              {
                "x": -6,
                "y": -2
              },
              {
                "x": -5,
                "y": -2
              },
              {
                "x": -7,
                "y": -2
              },
              {
                "x": -8,
                "y": -1
              }
            ],
            "x": -6,
            "y": -1
          },
          {
            "edges": [
              {
                "x": 4,
                "y": 3
              },
              {
                "x": 5,
                "y": 4
              },
              {
                "x": 7,
                "y": 3
              },
              {
                "x": 6,
                "y": 4
              },
              {
                "x": 3,
                "y": 3
              }
            ],
            "x": 5,
            "y": 3
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 10
              },
              {
                "x": 13,
                "y": 12
              },
              {
                "x": 14,
                "y": 11
              },
              {
                "x": 12,
                "y": 11
              },
              {
                "x": 14,
                "y": 12
              }
            ],
            "x": 13,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 7,
                "y": -9
              },
              {
                "x": 6,
                "y": -12
              },
              {
                "x": 7,
                "y": -11
              },
              {
                "x": 6,
                "y": -9
              },
              {
                "x": 5,
                "y": -10
              },
              {
                "x": 5,
                "y": -9
              }
            ],
            "x": 6,
            "y": -10
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 12
              },
              {
                "x": 12,
                "y": 13
              },
              {
                "x": 12,
                "y": 11
              },
              {
                "x": 11,
                "y": 12
              },
              {
                "x": 11,
                "y": 13
              }
            ],
            "x": 12,
            "y": 12
          },
          {
            "edges": [
              {
                "x": 14,
                "y": -5
              },
              {
                "x": 14,
                "y": -7
              },
              {
                "x": 13,
                "y": -7
              },
              {
                "x": 15,
                "y": -7
              },
              {
                "x": 14,
                "y": -4
              }
            ],
            "x": 14,
            "y": -6
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -3
              },
              {
                "x": 3,
                "y": -1
              },
              {
                "x": 2,
                "y": -2
              },
              {
                "x": 4,
                "y": -3
              },
              {
                "x": 4,
                "y": -2
              }
            ],
            "x": 3,
            "y": -2
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -14
              },
              {
                "x": 5,
                "y": -14
              },
              {
                "x": 4,
                "y": -15
              },
              {
                "x": 4,
                "y": -13
              },
              {
                "x": 5,
                "y": -15
              },
              {
                "x": 3,
                "y": -15
              }
            ],
            "x": 4,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 15,
                "y": 9
              },
              {
                "x": 14,
                "y": 11
              },
              {
                "x": 15,
                "y": 12
              },
              {
                "x": 15,
                "y": 10
              },
              {
                "x": 14,
                "y": 12
              },
              {
                "x": 14,
                "y": 10
              }
            ],
            "x": 15,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 8
              },
              {
                "x": 9,
                "y": 9
              },
              {
                "x": 10,
                "y": 8
              },
              {
                "x": 11,
                "y": 9
              },
              {
                "x": 11,
                "y": 10
              }
            ],
            "x": 10,
            "y": 9
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 4
              },
              {
                "x": 14,
                "y": 2
              },
              {
                "x": 14,
                "y": 3
              },
              {
                "x": 15,
                "y": 1
              },
              {
                "x": 14,
                "y": 5
              }
            ],
            "x": 15,
            "y": 3
          },
          {
            "edges": [
              {
                "x": -9,
                "y": -2
              },
              {
                "x": -10,
                "y": -3
              },
              {
                "x": -8,
                "y": -4
              },
              {
                "x": -8,
                "y": -3
              },
              {
                "x": -9,
                "y": -4
              },
              {
                "x": -10,
                "y": -2
              }
            ],
            "x": -9,
            "y": -3
          },
          {
            "edges": [
              {
                "x": 6,
                "y": 1
              },
              {
                "x": 5,
                "y": 0
              },
              {
                "x": 4,
                "y": 0
              },
              {
                "x": 6,
                "y": 0
              },
              {
                "x": 5,
                "y": -1
              }
            ],
            "x": 5,
            "y": 1
          },
          {
            "edges": [
              {
                "x": 13,
                "y": -1
              },
              {
                "x": 13,
                "y": 1
              },
              {
                "x": 13,
                "y": 0
              },
              {
                "x": 11,
                "y": 0
              },
              {
                "x": 11,
                "y": -1
              }
            ],
            "x": 12,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -4
              },
              {
                "x": -6,
                "y": -6
              },
              {
                "x": -6,
                "y": -5
              },
              {
                "x": -4,
                "y": -5
              },
              {
                "x": -4,
                "y": -6
              }
            ],
            "x": -5,
            "y": -5
          },
          {
            "edges": [
              {
                "x": 15,
                "y": -8
              },
              {
                "x": 14,
                "y": -7
              },
              {
                "x": 14,
                "y": -6
              },
              {
                "x": 14,
                "y": -8
              },
              {
                "x": 15,
                "y": -9
              }
            ],
            "x": 15,
            "y": -7
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 15
              },
              {
                "x": 12,
                "y": 15
              },
              {
                "x": 10,
                "y": 14
              },
              {
                "x": 9,
                "y": 15
              },
              {
                "x": 12,
                "y": 14
              }
            ],
            "x": 11,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -10
              },
              {
                "x": 0,
                "y": -9
              },
              {
                "x": -1,
                "y": -8
              },
              {
                "x": -2,
                "y": -9
              },
              {
                "x": -2,
                "y": -10
              }
            ],
            "x": -1,
            "y": -9
          },
          {
            "edges": [
              {
                "x": 10,
                "y": 8
              },
              {
                "x": 10,
                "y": 6
              },
              {
                "x": 11,
                "y": 7
              },
              {
                "x": 9,
                "y": 8
              },
              {
                "x": 11,
                "y": 6
              }
            ],
            "x": 10,
            "y": 7
          },
          {
            "edges": [
              {
                "x": 13,
                "y": 7
              },
              {
                "x": 14,
                "y": 5
              },
              {
                "x": 14,
                "y": 4
              },
              {
                "x": 15,
                "y": 6
              },
              {
                "x": 12,
                "y": 4
              },
              {
                "x": 12,
                "y": 5
              }
            ],
            "x": 13,
            "y": 5
          },
          {
            "edges": [
              {
                "x": -11,
                "y": 4
              },
              {
                "x": -12,
                "y": 5
              },
              {
                "x": -11,
                "y": 3
              },
              {
                "x": -13,
                "y": 3
              },
              {
                "x": -13,
                "y": 4
              },
              {
                "x": -11,
                "y": 5
              },
              {
                "x": -13,
                "y": 5
              }
            ],
            "x": -12,
            "y": 4
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -16
              },
              {
                "x": -1,
                "y": -15
              },
              {
                "x": 0,
                "y": -14
              },
              {
                "x": -2,
                "y": -14
              },
              {
                "x": -1,
                "y": -13
              },
              {
                "x": -2,
                "y": -13
              }
            ],
            "x": -1,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -4
              },
              {
                "x": 8,
                "y": -3
              },
              {
                "x": 9,
                "y": -3
              },
              {
                "x": 7,
                "y": -4
              },
              {
                "x": 9,
                "y": -5
              },
              {
                "x": 10,
                "y": -5
              }
            ],
            "x": 9,
            "y": -4
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 14
              },
              {
                "x": -3,
                "y": 15
              },
              {
                "x": -3,
                "y": 14
              },
              {
                "x": -2,
                "y": 13
              },
              {
                "x": -4,
                "y": 15
              }
            ],
            "x": -2,
            "y": 15
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -14
              },
              {
                "x": -4,
                "y": -15
              },
              {
                "x": -6,
                "y": -15
              },
              {
                "x": -6,
                "y": -14
              },
              {
                "x": -4,
                "y": -14
              }
            ],
            "x": -5,
            "y": -15
          },
          {
            "edges": [
              {
                "x": 2,
                "y": -3
              },
              {
                "x": 1,
                "y": -4
              },
              {
                "x": 4,
                "y": -4
              },
              {
                "x": 3,
                "y": -5
              },
              {
                "x": 4,
                "y": -3
              }
            ],
            "x": 3,
            "y": -4
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 8
              },
              {
                "x": -2,
                "y": 9
              },
              {
                "x": -1,
                "y": 10
              },
              {
                "x": 0,
                "y": 8
              },
              {
                "x": 0,
                "y": 9
              },
              {
                "x": 0,
                "y": 10
              }
            ],
            "x": -1,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -5,
                "y": -3
              },
              {
                "x": -5,
                "y": -4
              },
              {
                "x": -3,
                "y": -4
              },
              {
                "x": -4,
                "y": -2
              },
              {
                "x": -3,
                "y": -2
              },
              {
                "x": -5,
                "y": -2
              }
            ],
            "x": -4,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -5,
                "y": 12
              },
              {
                "x": -4,
                "y": 11
              },
              {
                "x": -7,
                "y": 11
              },
              {
                "x": -5,
                "y": 9
              },
              {
                "x": -6,
                "y": 11
              },
              {
                "x": -5,
                "y": 10
              },
              {
                "x": -4,
                "y": 12
              }
            ],
            "x": -5,
            "y": 11
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -1
              },
              {
                "x": 10,
                "y": -2
              },
              {
                "x": 11,
                "y": -3
              },
              {
                "x": 10,
                "y": -1
              },
              {
                "x": 10,
                "y": -3
              }
            ],
            "x": 11,
            "y": -2
          },
          {
            "edges": [
              {
                "x": 5,
                "y": 8
              },
              {
                "x": 7,
                "y": 8
              },
              {
                "x": 5,
                "y": 9
              },
              {
                "x": 7,
                "y": 9
              },
              {
                "x": 6,
                "y": 7
              }
            ],
            "x": 6,
            "y": 8
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 1
              },
              {
                "x": -10,
                "y": 3
              },
              {
                "x": -9,
                "y": 4
              },
              {
                "x": -10,
                "y": 0
              },
              {
                "x": -7,
                "y": 1
              }
            ],
            "x": -9,
            "y": 2
          },
          {
            "edges": [
              {
                "x": 12,
                "y": -15
              },
              {
                "x": 11,
                "y": -15
              },
              {
                "x": 10,
                "y": -15
              },
              {
                "x": 11,
                "y": -14
              },
              {
                "x": 9,
                "y": -16
              }
            ],
            "x": 11,
            "y": -16
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 10
              },
              {
                "x": -16,
                "y": 9
              },
              {
                "x": -16,
                "y": 11
              },
              {
                "x": -15,
                "y": 11
              },
              {
                "x": -16,
                "y": 8
              }
            ],
            "x": -16,
            "y": 10
          },
          {
            "edges": [
              {
                "x": 14,
                "y": 2
              },
              {
                "x": 15,
                "y": 0
              },
              {
                "x": 15,
                "y": 3
              },
              {
                "x": 14,
                "y": 0
              },
              {
                "x": 13,
                "y": 1
              },
              {
                "x": 15,
                "y": -1
              }
            ],
            "x": 15,
            "y": 1
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -13
              },
              {
                "x": -10,
                "y": -14
              },
              {
                "x": -8,
                "y": -14
              },
              {
                "x": -10,
                "y": -13
              },
              {
                "x": -9,
                "y": -15
              }
            ],
            "x": -9,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 15,
                "y": 9
              },
              {
                "x": 14,
                "y": 10
              },
              {
                "x": 15,
                "y": 11
              },
              {
                "x": 14,
                "y": 11
              },
              {
                "x": 14,
                "y": 9
              }
            ],
            "x": 15,
            "y": 10
          },
          {
            "edges": [
              {
                "x": 9,
                "y": 9
              },
              {
                "x": 8,
                "y": 8
              },
              {
                "x": 7,
                "y": 9
              },
              {
                "x": 9,
                "y": 8
              },
              {
                "x": 7,
                "y": 8
              }
            ],
            "x": 8,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -16,
                "y": -6
              },
              {
                "x": -15,
                "y": -4
              },
              {
                "x": -16,
                "y": -4
              },
              {
                "x": -14,
                "y": -5
              },
              {
                "x": -14,
                "y": -4
              }
            ],
            "x": -16,
            "y": -5
          },
          {
            "edges": [
              {
                "x": 6,
                "y": -12
              },
              {
                "x": 7,
                "y": -11
              },
              {
                "x": 8,
                "y": -12
              },
              {
                "x": 8,
                "y": -13
              },
              {
                "x": 7,
                "y": -14
              }
            ],
            "x": 7,
            "y": -12
          },
          {
            "edges": [
              {
                "x": 0,
                "y": 12
              },
              {
                "x": 1,
                "y": 13
              },
              {
                "x": 1,
                "y": 11
              },
              {
                "x": 0,
                "y": 13
              },
              {
                "x": 2,
                "y": 13
              }
            ],
            "x": 1,
            "y": 12
          },
          {
            "edges": [
              {
                "x": 1,
                "y": -4
              },
              {
                "x": -1,
                "y": -3
              },
              {
                "x": -2,
                "y": -4
              },
              {
                "x": -2,
                "y": -5
              },
              {
                "x": -2,
                "y": -3
              }
            ],
            "x": -1,
            "y": -4
          },
          {
            "edges": [
              {
                "x": -15,
                "y": 12
              },
              {
                "x": -15,
                "y": 10
              },
              {
                "x": -16,
                "y": 11
              },
              {
                "x": -16,
                "y": 10
              },
              {
                "x": -14,
                "y": 11
              },
              {
                "x": -14,
                "y": 12
              }
            ],
            "x": -15,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -6
              },
              {
                "x": -14,
                "y": -7
              },
              {
                "x": -16,
                "y": -6
              },
              {
                "x": -14,
                "y": -5
              },
              {
                "x": -13,
                "y": -7
              },
              {
                "x": -13,
                "y": -5
              }
            ],
            "x": -14,
            "y": -6
          },
          {
            "edges": [
              {
                "x": 13,
                "y": -1
              },
              {
                "x": 14,
                "y": -1
              },
              {
                "x": 15,
                "y": -1
              },
              {
                "x": 13,
                "y": 0
              },
              {
                "x": 15,
                "y": 0
              },
              {
                "x": 15,
                "y": 1
              },
              {
                "x": 13,
                "y": 1
              }
            ],
            "x": 14,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -1,
                "y": -3
              },
              {
                "x": -2,
                "y": -4
              },
              {
                "x": -3,
                "y": -4
              },
              {
                "x": -1,
                "y": -2
              },
              {
                "x": -3,
                "y": -2
              },
              {
                "x": -1,
                "y": -4
              }
            ],
            "x": -2,
            "y": -3
          },
          {
            "edges": [
              {
                "x": 15,
                "y": 9
              },
              {
                "x": 14,
                "y": 8
              },
              {
                "x": 14,
                "y": 10
              },
              {
                "x": 13,
                "y": 8
              },
              {
                "x": 15,
                "y": 10
              },
              {
                "x": 13,
                "y": 10
              }
            ],
            "x": 14,
            "y": 9
          },
          {
            "edges": [
              {
                "x": -7,
                "y": -3
              },
              {
                "x": -8,
                "y": -4
              },
              {
                "x": -9,
                "y": -3
              },
              {
                "x": -9,
                "y": -2
              },
              {
                "x": -7,
                "y": -2
              },
              {
                "x": -9,
                "y": -4
              }
            ],
            "x": -8,
            "y": -3
          },
          {
            "edges": [
              {
                "x": 0,
                "y": 3
              },
              {
                "x": -1,
                "y": 1
              },
              {
                "x": -2,
                "y": 2
              },
              {
                "x": -2,
                "y": 1
              },
              {
                "x": -2,
                "y": 3
              }
            ],
            "x": -1,
            "y": 2
          },
          {
            "edges": [
              {
                "x": 5,
                "y": -8
              },
              {
                "x": 7,
                "y": -7
              },
              {
                "x": 7,
                "y": -8
              },
              {
                "x": 6,
                "y": -9
              },
              {
                "x": 7,
                "y": -9
              },
              {
                "x": 5,
                "y": -7
              }
            ],
            "x": 6,
            "y": -8
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -4
              },
              {
                "x": -9,
                "y": -3
              },
              {
                "x": -10,
                "y": -3
              },
              {
                "x": -8,
                "y": -3
              },
              {
                "x": -9,
                "y": -2
              }
            ],
            "x": -9,
            "y": -4
          },
          {
            "edges": [
              {
                "x": 0,
                "y": 10
              },
              {
                "x": 0,
                "y": 8
              },
              {
                "x": -1,
                "y": 9
              },
              {
                "x": 1,
                "y": 10
              },
              {
                "x": -1,
                "y": 8
              }
            ],
            "x": 0,
            "y": 9
          },
          {
            "edges": [
              {
                "x": 10,
                "y": -3
              },
              {
                "x": 12,
                "y": -3
              },
              {
                "x": 11,
                "y": -2
              },
              {
                "x": 10,
                "y": -4
              },
              {
                "x": 12,
                "y": -4
              }
            ],
            "x": 11,
            "y": -3
          },
          {
            "edges": [
              {
                "x": -13,
                "y": -6
              },
              {
                "x": -12,
                "y": -5
              },
              {
                "x": -13,
                "y": -4
              },
              {
                "x": -14,
                "y": -6
              },
              {
                "x": -14,
                "y": -5
              },
              {
                "x": -12,
                "y": -4
              }
            ],
            "x": -13,
            "y": -5
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -13
              },
              {
                "x": 9,
                "y": -12
              },
              {
                "x": 9,
                "y": -14
              },
              {
                "x": 11,
                "y": -14
              },
              {
                "x": 11,
                "y": -12
              }
            ],
            "x": 10,
            "y": -13
          },
          {
            "edges": [
              {
                "x": -14,
                "y": -4
              },
              {
                "x": -15,
                "y": -4
              },
              {
                "x": -16,
                "y": -5
              },
              {
                "x": -14,
                "y": -6
              },
              {
                "x": -13,
                "y": -5
              },
              {
                "x": -13,
                "y": -6
              }
            ],
            "x": -14,
            "y": -5
          },
          {
            "edges": [
              {
                "x": -8,
                "y": -1
              },
              {
                "x": -7,
                "y": 1
              },
              {
                "x": -7,
                "y": 0
              },
              {
                "x": -9,
                "y": 1
              },
              {
                "x": -9,
                "y": -1
              }
            ],
            "x": -8,
            "y": 0
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -5
              },
              {
                "x": -10,
                "y": -6
              },
              {
                "x": -12,
                "y": -7
              },
              {
                "x": -10,
                "y": -7
              },
              {
                "x": -13,
                "y": -6
              }
            ],
            "x": -11,
            "y": -6
          },
          {
            "edges": [
              {
                "x": -13,
                "y": 11
              },
              {
                "x": -14,
                "y": 12
              },
              {
                "x": -15,
                "y": 11
              },
              {
                "x": -15,
                "y": 12
              },
              {
                "x": -15,
                "y": 10
              }
            ],
            "x": -14,
            "y": 11
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 5
              },
              {
                "x": -2,
                "y": 4
              },
              {
                "x": -2,
                "y": 6
              },
              {
                "x": -3,
                "y": 6
              },
              {
                "x": -1,
                "y": 6
              }
            ],
            "x": -2,
            "y": 5
          },
          {
            "edges": [
              {
                "x": -15,
                "y": -1
              },
              {
                "x": -13,
                "y": -1
              },
              {
                "x": -15,
                "y": -2
              },
              {
                "x": -14,
                "y": 0
              },
              {
                "x": -13,
                "y": 0
              }
            ],
            "x": -14,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -10,
                "y": -14
              },
              {
                "x": -9,
                "y": -13
              },
              {
                "x": -11,
                "y": -14
              },
              {
                "x": -8,
                "y": -13
              },
              {
                "x": -10,
                "y": -15
              }
            ],
            "x": -10,
            "y": -13
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 0
              },
              {
                "x": 1,
                "y": -2
              },
              {
                "x": 3,
                "y": -1
              },
              {
                "x": 2,
                "y": 1
              },
              {
                "x": 2,
                "y": -2
              },
              {
                "x": 3,
                "y": 0
              }
            ],
            "x": 2,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -4,
                "y": -6
              },
              {
                "x": -2,
                "y": -5
              },
              {
                "x": -3,
                "y": -7
              },
              {
                "x": -4,
                "y": -7
              },
              {
                "x": -4,
                "y": -5
              }
            ],
            "x": -3,
            "y": -6
          },
          {
            "edges": [
              {
                "x": 1,
                "y": 5
              },
              {
                "x": 0,
                "y": 6
              },
              {
                "x": 2,
                "y": 5
              },
              {
                "x": 0,
                "y": 7
              },
              {
                "x": 0,
                "y": 5
              }
            ],
            "x": 1,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -4,
                "y": 1
              },
              {
                "x": -6,
                "y": 1
              },
              {
                "x": -4,
                "y": 0
              },
              {
                "x": -5,
                "y": 2
              },
              {
                "x": -4,
                "y": 2
              }
            ],
            "x": -5,
            "y": 1
          },
          {
            "edges": [
              {
                "x": -6,
                "y": 3
              },
              {
                "x": -7,
                "y": 1
              },
              {
                "x": -6,
                "y": 1
              },
              {
                "x": -5,
                "y": 2
              },
              {
                "x": -5,
                "y": 3
              }
            ],
            "x": -6,
            "y": 2
          },
          {
            "edges": [
              {
                "x": 3,
                "y": 7
              },
              {
                "x": 5,
                "y": 8
              },
              {
                "x": 3,
                "y": 8
              },
              {
                "x": 3,
                "y": 9
              },
              {
                "x": 4,
                "y": 9
              },
              {
                "x": 4,
                "y": 7
              }
            ],
            "x": 4,
            "y": 8
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 4
              },
              {
                "x": 5,
                "y": 4
              },
              {
                "x": 7,
                "y": 3
              },
              {
                "x": 6,
                "y": 5
              },
              {
                "x": 5,
                "y": 3
              }
            ],
            "x": 6,
            "y": 4
          },
          {
            "edges": [
              {
                "x": 4,
                "y": 10
              },
              {
                "x": 5,
                "y": 9
              },
              {
                "x": 6,
                "y": 10
              },
              {
                "x": 6,
                "y": 11
              },
              {
                "x": 4,
                "y": 9
              }
            ],
            "x": 5,
            "y": 10
          },
          {
            "edges": [
              {
                "x": -14,
                "y": -12
              },
              {
                "x": -13,
                "y": -13
              },
              {
                "x": -14,
                "y": -13
              },
              {
                "x": -12,
                "y": -11
              },
              {
                "x": -13,
                "y": -11
              },
              {
                "x": -12,
                "y": -12
              }
            ],
            "x": -13,
            "y": -12
          },
          {
            "edges": [
              {
                "x": -4,
                "y": -6
              },
              {
                "x": -3,
                "y": -4
              },
              {
                "x": -5,
                "y": -5
              },
              {
                "x": -3,
                "y": -6
              },
              {
                "x": -5,
                "y": -4
              }
            ],
            "x": -4,
            "y": -5
          },
          {
            "edges": [
              {
                "x": -12,
                "y": -14
              },
              {
                "x": -10,
                "y": -14
              },
              {
                "x": -10,
                "y": -13
              },
              {
                "x": -12,
                "y": -15
              },
              {
                "x": -10,
                "y": -15
              }
            ],
            "x": -11,
            "y": -14
          },
          {
            "edges": [
              {
                "x": 3,
                "y": -11
              },
              {
                "x": 2,
                "y": -12
              },
              {
                "x": 0,
                "y": -12
              },
              {
                "x": 1,
                "y": -10
              },
              {
                "x": 2,
                "y": -10
              },
              {
                "x": 0,
                "y": -10
              }
            ],
            "x": 1,
            "y": -11
          },
          {
            "edges": [
              {
                "x": -10,
                "y": 0
              },
              {
                "x": -8,
                "y": -1
              },
              {
                "x": -10,
                "y": -1
              },
              {
                "x": -9,
                "y": -2
              },
              {
                "x": -9,
                "y": 1
              },
              {
                "x": -8,
                "y": 0
              },
              {
                "x": -10,
                "y": -2
              }
            ],
            "x": -9,
            "y": -1
          },
          {
            "edges": [
              {
                "x": -1,
                "y": 14
              },
              {
                "x": 1,
                "y": 15
              },
              {
                "x": 0,
                "y": 13
              },
              {
                "x": 1,
                "y": 14
              },
              {
                "x": 1,
                "y": 13
              }
            ],
            "x": 0,
            "y": 14
          },
          {
            "edges": [
              {
                "x": 7,
                "y": 9
              },
              {
                "x": 6,
                "y": 11
              },
              {
                "x": 5,
                "y": 10
              },
              {
                "x": 7,
                "y": 11
              },
              {
                "x": 5,
                "y": 9
              }
            ],
            "x": 6,
            "y": 10
          },
          {
            "edges": [
              {
                "x": 11,
                "y": -7
              },
              {
                "x": 9,
                "y": -7
              },
              {
                "x": 9,
                "y": -6
              },
              {
                "x": 11,
                "y": -8
              },
              {
                "x": 11,
                "y": -6
              }
            ],
            "x": 10,
            "y": -7
          },
          {
            "edges": [
              {
                "x": -14,
                "y": 6
              },
              {
                "x": -12,
                "y": 5
              },
              {
                "x": -13,
                "y": 4
              },
              {
                "x": -13,
                "y": 6
              },
              {
                "x": -12,
                "y": 4
              }
            ],
            "x": -13,
            "y": 5
          },
          {
            "edges": [
              {
                "x": -14,
                "y": 7
              },
              {
                "x": -14,
                "y": 6
              },
              {
                "x": -15,
                "y": 5
              },
              {
                "x": -16,
                "y": 7
              },
              {
                "x": -16,
                "y": 6
              }
            ],
            "x": -15,
            "y": 6
          },
          {
            "edges": [
              {
                "x": -9,
                "y": 13
              },
              {
                "x": -8,
                "y": 14
              },
              {
                "x": -8,
                "y": 12
              },
              {
                "x": -9,
                "y": 14
              },
              {
                "x": -8,
                "y": 15
              }
            ],
            "x": -8,
            "y": 13
          },
          {
            "edges": [
              {
                "x": 4,
                "y": 5
              },
              {
                "x": 6,
                "y": 6
              },
              {
                "x": 5,
                "y": 4
              },
              {
                "x": 6,
                "y": 5
              },
              {
                "x": 5,
                "y": 6
              },
              {
                "x": 4,
                "y": 6
              }
            ],
            "x": 5,
            "y": 5
          }
        ],
        "cellSize": 0.05,
        "startPos": {
          "x": -16,
          "y": 15
        },
        "mapAmplitude": 1,
        "endPos": {
          "x": 15,
          "y": -16
        },
        "speedPref": speed,
        "safetyPref": safety,
        "energyPref": energy,
        "graphSeed": 123,
        "distanceBased": false,
        "config": {
          "mass": 20,
          "width": 0.225,
          "maxSpeed": 3,
          "minEnergy": 5,
          "stepUp": 0.7,
          "stepDown": 0.7,
          "inclineUp": 60,
          "inclineDown": 60
        }
      };

      console.log(input_data)

      fetch('https://senior-project-production.up.railway.app/get-path', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          }, body: JSON.stringify(input_data)
      }).then(response => response.json()).then(data => { console.log(data.path); setPath(data.path)});
  }

  return (
    <div className="content">
      <Header></Header>
      <Display path={path} myMap={myMap} handleGetPath={handleGetPath} speed={speed} safety={safety} energy={energy} setSpeed={setSpeed} setSafety={setSafety} setEnergy={setEnergy}/>
      <Paper></Paper>
    </div>
  );
};

export default App;