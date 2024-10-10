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

function BF_RMD_HM_08_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>
          <Typography>문서번호: BF-RMD-HM-08</Typography>
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
// 본 규정은 (주)바이오에프디엔씨(이하 '당사'라 한다.) 제조소에서 작업소 및 보관소, 품질관리 구역의 환경을 위생 관리하는데 필요한 업무 지침을 정함으로서 제품 오염을 방지하여 우수한 품질의 제품을 생산하는데 그 목적이 있다.

// 2. 적용범위
// 본 규정은 당사의 제품 제조 관련 모든 업무담당자에 적용한다.

// 3. 책임과 권한
// 3.1 대표이사
// 3.1.1 본 규정에 대한 최종 승인 권한을 가진다.

// 3.2 품질보증책임자
// 3.2.1 본 규정의 제정 및 개정에 대한 승인 권한을 가진다.
// 3.2.2 위생관리 상태를 총괄 관리, 감독한다.

// 3.3 제조생산책임자
// 3.3.1 작업소 및 보관소의 위생관리 계획을 수립하고 실시한다.
// 3.3.2 위생관리 상태를 관리, 감독한다.
// 3.3.3 작업장 및 작업원 위생관리를 총괄한다.

// 3.4 업무담당자
// 3.4.1 본 규정에 따라 청소 및 소독 업무를 수행한다.
// 3.4.2 위생 상태 부적합 사항 발생 시 즉시 보고한다.

// 4. 작업소의 관리체제 기준
// 4.1 각 작업소는 청결하고 위생적인 상태로 유지한다.
// 4.2 각 작업소는 환기가 잘되고 청소, 소독을 철저히 하여 청결하게 유지한다.
// 4.3 각 작업소에는 해당 작업에 필요한 물품 이외의 것들은 제거하여 작업 중 상호간의 혼동 및 교차오염이 일어나지 않아야 한다.
// 4.4 가루가 날리는 작업소는 비산에 의한 오염을 방지하는 제진 시설을 갖추고 유지, 관리한다.
// 4.5 쥐, 해충 및 먼지 등을 막을 수 있는 시설을 갖춘다.

// 5. 작업소 구분
// 작업소 및 그 부속 시설은 제조의 대상과 형태 등에 따라 아래와 같이 구분한다.

// | 작업실 | 해당 부서 | 작업 내용 |
// |--------|-----------|-----------|
// | 칭량실 | 제조생산부 | 원료 칭량 |
// | 제조실 | 제조생산부 | 제품 제조 |
// | 세척실 | 제조생산부 | 제조시 사용한 용기 및 도구 등을 세척 |
// | 충진실 | 제조생산부 | 제조된 제품의 충진 |
// | 포장실 | 제조생산부 | 충진제품의 포장 |
// | 반제품 보관소 | 제조생산부 | 제조된 반제품의 보관 및 불출 |
// | 완제품 보관소 | 제조생산부 | 제품 보관 및 출하 |
// | 원료 보관소 | 제조생산부 | 입고된 원료의 보관 및 불출 |
// | 자재 보관소 | 제조생산부 | 입고된 자재의 보관 및 불출 |
// | 미생물 실험실 | 품질보증부 | 미생물 시험 |
// | 기타 | 관련부서 | 작업소내의 복도, 갱의실 등의 장소 |

// 6. 청소 도구 및 세척제, 소독제의 구분
// 6.1 청소 도구
// 6.1.1 빗자루: 작업소 및 보관소의 바닥 등의 이물질이나 먼지 등을 제거하는데 사용한다.
// 6.1.2 걸레: 작업소 및 보관소의 바닥, 작업대, 기타 부속물의 먼지 등을 제거하는데 사용한다.
// 6.1.3 위생수건: 청소 후 작업대, 기계 등에 남아 있는 이물질을 제거하는데 사용한다.
// 6.1.4 수세미: 기계, 기구류에 붙어 있는 것들을 제거하는데 사용한다.


// 6.2 청소용수: 상수

// 6.3 세제 및 소독제
// 6.3.1 중성 세제
// 6.3.2 소독액
// 6.3.2.1 70% 에탄올: 기계, 작업장 소독

// 6.4 청소 도구의 관리
// 6.4.1 청소 도구함: 청소 도구함을 별도로 설치하여 청소도구를 넣어 관리한다.
// 6.4.2 청소 도구의 세척 및 소독: 불결한 청소도구는 오히려 작업소를 오염시킬 수 있으므로 세척 후 건조하여 청결하게 보관한다.

// 7. 작업소별 청소 및 소독방법, 점검방법 및 주기
// 7.1 작업소별 청소 방법, 점검 방법 및 주기는 첨부 2와 같이 실시한다.
// 7.2 휴무 시 작업 전 먼지제거 및 청소를 실시하고 점검 후 이상이 없을 경우 작업에 들어간다. 만일 이상이 발견되면 재 청소 및 재 소독을 실시한 후 작업에 들어간다.

// 8. 청소, 소독 시 유의 사항
// 8.1 청소, 소독 시에는 눈에 보이지 않는 곳, 하기 힘든 곳 등에 특히 유의하여 세밀하게 한다.
// 8.2 물청소 후에는 물기를 완전히 제거한다.
// 8.3 청소 도구는 사용 후 세척하여 건조 또는 필요시 소독하여 오염원이 되지 않도록 한다.
// 8.4 소독 시에는 기계, 기구류, 내용물 등에 절대 오염이 되지 않도록 한다.
// 8.5 청소 후에는 그 상태를 필히 재확인하여 이상이 없도록 한다.

// 9. 이상 발생 시 관리
// 9.1 작업소 및 보관소의 위생상태가 제품이나 보관품목의 품질에 영향을 줄 수 있다고 판단될 때는 작업을 금한다.
// 9.2 작업소 및 보관소별 관리담당자는 점검 결과 이상 발생시 생산관리책임자에게 보고하여 즉시 조치를 받는다.
// 9.3 생산관리책임자는 이상 발생 사항의 중대성 등을 고려하여 즉시 조치를 취한다.

// 10. 기록 및 문서 보관
// 본 규정에 의해 처리된 문서는 명확한 기록, 관리, 유지하여야 하며, 기타 사항은 "기록 관리 규정"에 준한다.

// 11. 첨부
// 첨부1) 청소 및 소독에 사용되는 소독제/세제
// 첨부2) 작업소 별 표준 청소 방법, 점검 방법




// 첨부1) 청소 및 소독에 사용되는 소독제/세제

// | 소독제/세제 | 용도 | 조제 방법 |
// |-------------|------|-----------|
// | 70% 에탄올 | 작업장/작업대/기계 소독 | 에탄올 736ml + 정제수 264ml을 칭량하여 희석 용기에 넣고 혼합한다. |
// | 중성세제 | 작업장 바닥/작업대 | 중성세제 5ml에 물을 가하여 1L로 한다. |

// 첨부2) 작업소별 표준 청소 및 소독 방법, 점검 방법

// 1. 대상구역
// - 입고 장소
// - 원료 보관소
// - 자재 보관소
// - 반제품 보관소
// - 완제품 보관소
// - 칭량실
// - 제조실
// - 충진실
// - 미생물 실험실
// - 세척실
// - 포장실

// 2. 청소방법
// - 바닥 청소: 모든 작업소 및 보관소
// - 걸레로 닦기: 모든 작업소 및 보관소
// - 70% 에탄올로 소독: 칭량실, 제조실, 충진실, 미생물 실험실, 세척실
// - 중성세제로 찌든때 제거: 칭량실, 제조실, 충진실, 미생물 실험실, 세척실, 포장실

// 3. 청소주기별 장소목록
// 3.1 일일 청소 장소:
// - 칭량실 
// - 제조실
// - 충진실
// - 포장실 
// - 세척실
// - 미생물 실험실

// 3.2 주간 청소 장소:
// - 입고 장소
// - 원료 보관소
// - 자재 보관소
// - 반제품 보관소
// - 제품 보관소

// * 모든 장소는 육안으로 점검하며, 각 작업 및 보관 담당자가 청소를 수행하고 확인합니다.
// * 일일 청소는 매일 1회 이상 실시하며, 필요에 따라 수시로 실시합니다.
// * 주간 청소는 주 1회 이상 실시하며, 필요에 따라 추가로 실시합니다.
// * 모든 청소 주기에 관계없이, 오염이 발견되거나 필요하다고 판단될 경우 즉시 청소를 실시합니다.
    </Box>
  );
}

export default BF_RMD_HM_08_Content;