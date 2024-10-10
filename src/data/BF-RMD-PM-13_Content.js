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

function BF_RMD_PM_13_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>
          <Typography>문서번호: BF-RMD-PM-13</Typography>
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
// 본 규정은 (주)바이오에프디엔씨(이하 "당사"라 함)의 각 공정에서 제조되는 반제품의 품질을 확보하고, 소비자가 요구하는 품질의 제품을 공급하여 품질보증을 달성하는 것을 목적으로 한다.

// 2. 적용범위
// 본 규정은 당사의 원료 계량 공정부터 최종 완제품이 완제품 보관소에 입고되는 공정까지 적용되며, 공정 전반의 품질에 관한 주요사항에 대해 지정된 검사자가 확인점검을 시행한다.

// 3. 책임과 권한
// 3.1 품질보증책임자
// 3.1.1 공정검사 및 관리를 위한 각 공정별 검사 항목 정의
// 3.1.2 공정검사에 필요한 검사설비 및 기구류 확보

// 3.2 제조담당자
// 3.2.1 유형별 공정검사 체크 항목 수행
// 3.2.2 검사 결과 기록 및 서명

// 3.3 품질관리담당자
// 3.3.1 제품에 따라 지정된 품질검사 항목 수행
// 3.3.2 검사 결과 기록 및 서명

// 4. 업무 절차
// 4.1 공정 검사 기록
// 4.1.1 제조담당자와 품질관리담당자는 작업지시 및 기록서에 검사 결과를 기록하고 서명한다.
// 4.1.2 모든 관련 담당자는 검사 항목과 절차를 숙지하여 원활한 검사업무를 수행해야 한다.

// 4.2 공정검사의 판정
// 4.2.1 공정검사의 결과가 판정될 때까지는 다음 공정으로 이송하지 못한다.
// 4.2.2 단, 특별한 이상이 발견되지 않은 연속작업의 경우는 이 제한을 받지 않는다.

// 4.3 이상발생시 조치
// 4.3.1 업무담당자는 공정검사 결과 이상 발생시 다음과 같이 조치한다:
// 4.3.1.1 공정검사 항목이 규격치를 벗어난 경우 즉시 정상치에 오도록 재조정 조치한다.
// 4.3.1.2 재조정 조치가 불가능한 경우 전회의 검사이후에 제조된 것을 구분하여 그 처리는 제조생산담당자 및 품질보증책임자와 협의하여 조치한다.
// 4.3.1.3 이상 발생내용, 조치내용 및 그 결과는 공정 검사기록 양식에 기록한다.

// 5. 유형별 공정 검사 항목
// 제품류 | 공정 | 검사항목 | 검사빈도
// --- | --- | --- | ---
// 공통 | 위생 | 1) 작업장 청결도 2) 작업자 위생복/장갑 등 복장 3) 장비/도구 세척 상태 | 시작시 1회
//  | 설비 | 1) 작동/기능 상태 점검 2) 온도/시간/속도 등 세팅값 3) 기타 안전점검 | 시작시 1회
//  | 충진중 | 1) 저울 0점 확인 2) 중(용)량 및 겉보기 충진량 3) 필터 상태 4) 캡핑, 외관 검사 | 시작시 1회
//  | 포장중 | 1) 작업장 정리정돈 2) 포장 용기 및 표시 검사 3) 외관 검사 4) 누액 검사 | 시작시, 완료후 1회
// 액체류 제품 | 제조 | 1) 교반상태 2) 색상, 향취, 투명도 등 기본성상 3) 기포 발생/이물질 혼입 여부 | 작업 중 1회
//  | 추출 | 1) 원재료/용매 비율 2) 온도/압력/시간 3) 수율 등 누출 여부 확인 | 작업 중 1회
// 분말류 제품 | 제조 | 1) 원료투입 시 비말 상태확인 2) 마스크 착용 확인 3) 교반상태 4) 이물질 혼입 여부 확인 | 작업 중 1회

// 6. 기록 및 문서 관리
// 6.1 본 규정에 의해 발행된 공정 검사기록은 4년간 보관한다.

// 7. 관련 문서
// 7.1 제품표준서
// 7.2 작업지시 및 기록서

// 8. 첨부
// 첨부1) 공정 검사기록 양식
    </Box>
  );
}

export default BF_RMD_PM_13_Content;