import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';

function AmorepacificAudit() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            아모레퍼시픽 감사
          </Typography>
          <Typography variant="body1" paragraph>
            이 페이지는 아모레퍼시픽 감사 관련 정보를 포함합니다.
          </Typography>
          <Typography variant="body1" paragraph>
            여기에 아모레퍼시픽 감사와 관련된 세부 내용, 절차, 일정 등을 추가할 수 있습니다.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default AmorepacificAudit;