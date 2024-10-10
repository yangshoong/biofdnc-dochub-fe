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

function BF_RMD_PM_14_Content() {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>
          <Typography>문서번호: BF-RMD-PM-14</Typography>
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
// 본 규정은 (주)바이오에프디엔씨(이하 "당사"라 함)에서 사용되는 모든 라벨의 관리, 출력, 사용 및 폐기에 관한 기준을 정하여 제품의 품질을 보증하고 생산성을 향상시키는 데 그 목적이 있다.

// 2. 적용범위
// 본 규정은 당사에서 사용되는 모든 라벨에 적용된다.

// 3. 용어의 정의
// 3.1 라벨: 제품, 원료, 반제품 등의 정보를 표시하기 위해 사용되는 표지
// 3.2 전용 라벨 출력 프로그램: 제품 라벨 출력 및 수량 관리를 위해 사용되는 전문 소프트웨어

// 4. 책임과 권한
// 4.1 대표이사
// 4.1.1 라벨 관리 규정의 승인

// 4.2 품질보증책임자
// 4.2.1 라벨 관리 규정의 검토 및 승인
// 4.2.2 라벨 내용의 적절성 검토
// 4.2.3 새로운 라벨 설계 및 변경에 대한 승인

// 4.3 제조생산책임자
// 4.3.1 라벨 관리 업무 총괄
// 4.3.2 라벨 출력 및 사용에 대한 관리·감독

// 4.4 제조담당자
// 4.4.1 라벨 출력, 부착 및 관리 업무 수행
// 4.4.2 제품 라벨 재고 관리

// 4.5 품질관리담당자
// 4.5.1 라벨 품질 검사 수행

// 5. 라벨 관리 절차
// 5.1 라벨 설계 및 승인
// 5.1.1 새로운 라벨 설계 시 품질보증책임자의 승인을 받아야 한다.
// 5.1.2 라벨에는 제품명, 배치번호, 제조일자, 유효기간 등 필수 정보가 포함되어야 한다.

// 5.2 라벨 출력
// 5.2.1 제품 라벨은 전용 라벨 출력 프로그램을 통해 출력 및 수량이 관리된다.
// 5.2.2 제품 라벨 출력 수량은 제조 배치 크기에 따라 전용 프로그램에서 자동으로 계산된다.
// 5.2.3 기타 라벨(원료, 반제품 등)은 별도의 프로그램을 통해 출력되며, 수량 관리는 하지 않는다.
// 5.2.4 라벨 출력 시 제조담당자는 내용의 정확성을 확인해야 한다.

// 5.3 라벨 사용
// 5.3.1 라벨은 해당 제품, 원료, 반제품에 정확히 부착되어야 한다.
// 5.3.2 라벨 부착 후 제조담당자는 부착 상태와 내용을 재확인해야 한다.

// 5.4 라벨 재고 관리
// 5.4.1 미사용 제품 라벨은 안전한 장소에 보관하며, 전용 라벨 출력 프로그램을 통해 재고를 관리한다.
// 5.4.2 제조담당자는 주기적으로 제품 라벨 재고를 확인하고 전용 프로그램에 기록한다.
// 5.4.3 기타 라벨의 재고는 별도로 관리하지 않는다.

// 5.5 라벨 폐기
// 5.5.1 오류 라벨이나 사용하지 않는 라벨은 즉시 폐기한다.
// 5.5.2 폐기 시 라벨의 정보가 노출되지 않도록 주의한다.
// 5.5.3 제품 라벨 폐기 내역은 전용 라벨 출력 프로그램에 기록한다.

// 5.6 라벨 변경 관리
// 5.6.1 라벨 내용 변경 시 품질보증책임자의 승인을 받아야 한다.
// 5.6.2 변경 이력은 문서화하여 관리한다.

// 6. 라벨 검사
// 6.1 품질관리담당자는 주기적으로 라벨의 품질을 검사한다.
// 6.2 검사 항목: 라벨 내용의 정확성, 인쇄 상태, 부착 상태 등
// 6.3 제품 라벨 검사 결과는 전용 라벨 출력 프로그램에 기록한다.

// 7. 교육 훈련
// 7.1 제조생산책임자는 라벨 관리에 관한 교육을 정기적으로 실시한다.
// 7.2 교육 내용: 라벨 관리의 중요성, 라벨 출력 및 부착 방법, 전용 라벨 출력 프로그램 사용법 등

// 8. 기록 관리
// 8.1 제품 라벨 관리에 관한 모든 기록은 전용 라벨 출력 프로그램에 저장되며, 4년간 보관한다.
// 8.2 기록 항목: 제품 라벨 출력 이력, 재고 현황, 폐기 내역, 검사 결과 등
// 8.3 기타 라벨 관련 기록은 별도로 관리한다.

// 9. 관련 문서
// 9.1 제품표준서
// 9.2 작업지시 및 기록서
// 9.3 문서관리규정

// 10. 라벨 보안
// 10.1 라벨 템플릿 및 디자인 파일은 접근 제한된 서버에 보관한다.
// 10.2 라벨 출력 권한은 지정된 담당자에게만 부여한다.

// 11. 비상 상황 대응
// 11.1 라벨 오류 발견 시 즉시 생산을 중단하고 품질보증책임자에게 보고한다.
// 11.2 오류 라벨이 부착된 제품의 회수 절차를 수립한다.
    </Box>
  );
}

export default BF_RMD_PM_14_Content;