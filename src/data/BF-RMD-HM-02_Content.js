import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemText, ListItemIcon, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { styled } from '@mui/system';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// 스타일링을 위한 커스텀 컴포넌트
const SectionTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  margin: '20px 0 10px 0',
});

const SubsectionTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1rem',
  margin: '10px 0',
});

const StyledList = styled(List)({
  paddingLeft: '20px',
});

const StyledListItem = styled(ListItem)({
  paddingLeft: '20px',
  display: 'flex',
  alignItems: 'center',
});

const Paragraph = styled(Typography)({
  marginBottom: '10px',
});

function BF_RMD_HM_02_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>
          <Typography>문서번호: BF-RMD-HM-02</Typography>
          <Typography>개정번호: 00</Typography>
        </Box>
        <Box>
          <Typography>제·개정일: 2024.07.01</Typography>
        </Box>
      </Box>
      <Typography variant="subtitle1" gutterBottom>
        제(개정) 이력
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>제·개정번호</TableCell>
              <TableCell>제·개정일자</TableCell>
              <TableCell>제·개정내용</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>비고</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>0</TableCell>
              <TableCell>2024.07.01</TableCell>
              <TableCell>신규 제정</TableCell>
              <TableCell>신동선</TableCell>
              <TableCell></TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '20px' }}>
        문서 승인
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '25%' }}>구분</TableCell>
              <TableCell sx={{ width: '25%' }}>작성</TableCell>
              <TableCell sx={{ width: '25%' }}>검토</TableCell>
              <TableCell sx={{ width: '25%' }}>승인</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>서명</TableCell>
              <TableCell>신동선</TableCell>
              <TableCell>문창배</TableCell>
              <TableCell>이정훈</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>날짜</TableCell>
              <TableCell>2024.07.01</TableCell>
              <TableCell>2024.07.01</TableCell>
              <TableCell>2024.07.01</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
//     1. 목적
// 본 규정은 (주)바이오에프디엔씨 (이하 "당사"라 함)의 화장품 원료 생산에 종사하는 업무담당자들이 작업의 종류에 따라 착용할 위생복, 위생모, 위생화 등에 대한 규격과 착용방법, 관리방법을 규정함으로써 작업장을 청결하고 위생적으로 유지하는데 그 목적이 있다. 

// 2. 적용범위
// 본 규정은 당사의 모든 작업장 및 보관소에 출입하는 업무담당자 및 외부 방문자에게 적용된다.

// 3. 책임과 권한
// 3.1 대표이사
// 3.1.1 위생복 착용 규정의 승인

// 3.2 품질보증책임자
// 3.2.1 위생복 착용 규정의 수립 및 이행 감독
// 3.2.2 위생복 착용 상태 점검 및 개선 조치

// 3.3 제조생산책임자
// 3.3.1 제조 구역 내 위생복 착용 관리 실행
// 3.3.2 위생복 관련 시설물 유지 관리
// 3.3.3 작업장 및 작업원 위생관리 총괄

// 3.4 업무담당자
// 3.4.1 위생복 착용 규정 준수
// 3.4.2 개인 위생 유지 및 관리
// 3.4.3 위생복 착용 관련 문제점 보고

// 4. 위생복 착용 규정
// 종류 | 재질 | 색상 | 착용형태 | 남녀구분 | 착용 구역
// --- | --- | --- | --- | --- | ---
// 위생복 | 폴리에스텔 + 면 | 하늘색 | 상·하의 분리 | 없음 | 제조구역
// 작업복 | 폴리에스텔 + 면 | 하늘색/회색 | 상·하의 분리 | 없음 | 일반구역
// 위생복(외부인용) | 폴리에스텔 또는 방진 Paper | 흰색 | 상하의 분리 | 없음 | 제조구역
// 위생모 | 폴리에스텔 + 면 | 흰색 | 머리카락이 밖으로 나오지 않도록 할 것 | 있음 | 제조구역
// 위생화/안전화 | 폴리에스텔 + 면 또는 고무 | 위생화 : 흰색, 안전화 : 검정색 | 꺾어신지 않음 | 없음 | 제조구역(위생화), 일반구역(안전화)
// 실험가운 | 폴리에스텔 + 면 | 흰색 | 상하의 통합 | 없음 | 품질 실험실, 연구소

// 5. 위생복 착용 지침
// 5.1 위생화 및 위생복 탈의
// 5.1.1 현관에 설치된 신발장에서 실외화를 슬리퍼로 갈아신고, 현장에 입실 시 위생화로 갈아 신는다. 
// 5.1.2 탈의실에서 실외복을 상기 4항에 규정된 위생복으로 다음과 같이 갈아 입는다.
// 5.1.2.1 내의 등 모든 개인 복장이 위생복 밖으로 나오지 않도록 착용한다.
// 5.1.2.2 상의가 하의 겉으로 나오도록 착용한다.
// 5.1.2.3 머리카락이 밖으로 나오지 않도록 위생모를 착용한다.
// 5.1.2.4 미생물 실험실, 칭량실, 제조실, 충진실 등의 공정을 출입 시에는 필요 시 마스크, 장갑을 착용한다.
// 5.1.2.5 외래 방문객은 상기 4항에 규정된 외부인용 위생복을 착용 후에 작업장 출입을 허용한다.

// 5.2 구역간 이동 시 위생복 착용 
// 5.2.1 제조구역 업무담당자가 일반구역으로 이동 시에는 탈의실에서 위생복을 해당 구역에 맞는 작업복 또는 실외복으로 교체한 후 이동한다. 
// 5.2.2 일반구역에서 제조구역으로 출입할 경우에는 상기 4항에 따라 위생복 및 위생화로 갱의한 후 출입한다.

// 6. 위생복 관리 지침 
// 6.1 구입 및 유지관리
// 위생복을 1인당 2벌 구입하여, 적절한 시기에 세탁하여 교체할 수 있도록 한다.
// 6.2 세탁관리
// 6.2.1 위생복은 최소 매주 1회 세탁한다.
// 6.2.2 세탁은 정해진 일정마다 개인별로 청결히 세탁을 한다.
// 6.2.3 세탁이 완료된 위생복은 각 작업장 위생관리 담당자가 청결상태를 점검하여 "작업장 위생관리 기록서"에 기록한다. 점검 결과 세탁이 불완전하다고 판정될 경우 출입을 통제한 후 재세탁하도록 한다.
    </Box>
  );
}

export default BF_RMD_HM_02_Content;