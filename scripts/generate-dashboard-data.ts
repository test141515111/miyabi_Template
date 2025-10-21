#!/usr/bin/env tsx
/**
 * Generate Dashboard Data for GitHub Pages
 *
 * This script generates dashboard data from GitHub repository metrics
 * for display on GitHub Pages.
 */

import { writeFileSync } from 'fs';
import { join } from 'path';

interface DashboardData {
  generated: string;
  repository: string;
  stats: {
    totalIssues: number;
    openIssues: number;
    closedIssues: number;
    totalPRs: number;
    openPRs: number;
    mergedPRs: number;
  };
  recentActivity: Array<{
    type: string;
    title: string;
    date: string;
    url: string;
  }>;
}

async function generateDashboardData(): Promise<void> {
  const repository = process.env.GITHUB_REPOSITORY || 'unknown/unknown';
  const projectNumber = process.env.GITHUB_PROJECT_NUMBER || '1';

  console.log(`Generating dashboard data for ${repository}`);
  console.log(`Project Number: ${projectNumber}`);

  // For now, generate placeholder data
  // TODO: Fetch real data from GitHub API when GitHub token is available
  const dashboardData: DashboardData = {
    generated: new Date().toISOString(),
    repository,
    stats: {
      totalIssues: 0,
      openIssues: 0,
      closedIssues: 0,
      totalPRs: 0,
      openPRs: 0,
      mergedPRs: 0,
    },
    recentActivity: []
  };

  // Write to output file
  const outputPath = join(process.cwd(), 'docs', 'dashboard-data.json');

  try {
    writeFileSync(outputPath, JSON.stringify(dashboardData, null, 2));
    console.log(`✅ Dashboard data generated successfully: ${outputPath}`);
  } catch (error) {
    console.error('❌ Failed to write dashboard data:', error);
    process.exit(1);
  }
}

// Run the script
generateDashboardData().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
