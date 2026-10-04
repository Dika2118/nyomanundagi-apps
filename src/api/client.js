// ========================================================
// API Client for Nyoman Undagi Client Web Application
// Connects to nyomanundagi-api (Laravel Backend)
// ========================================================

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
const STORAGE_BASE_URL = import.meta.env.VITE_STORAGE_URL || 'http://localhost:8000/storage';

/**
 * Resolve image URL from Laravel storage or external URL
 */
export function resolveImageUrl(path, fallback = '') {
  if (!path) return fallback;
  if (typeof path !== 'string') return fallback;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  return `${STORAGE_BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

/**
 * Universal JSON fetch helper
 */
async function fetchJson(endpoint, params = {}) {
  try {
    let url = endpoint.startsWith('http')
      ? endpoint
      : `${API_BASE_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;

    if (params && Object.keys(params).length > 0) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '') {
          searchParams.append(key, val);
        }
      });
      const queryString = searchParams.toString();
      if (queryString) {
        url += (url.includes('?') ? '&' : '?') + queryString;
      }
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      console.warn(`[API] Failed fetching ${url} - Status ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data?.data !== undefined ? data.data : data;
  } catch (err) {
    console.warn(`[API] Network error fetching ${endpoint}:`, err.message);
    return null;
  }
}

// ── Hero Banners ──
export async function getHeroBanners() {
  const data = await fetchJson('/hero-banners');
  return Array.isArray(data) ? data : [];
}

// ── Services ──
export async function getServices() {
  const data = await fetchJson('/services');
  return Array.isArray(data) ? data : [];
}

// ── Project Categories ──
export async function getProjectCategories() {
  const data = await fetchJson('/project-categories');
  return Array.isArray(data) ? data : [];
}

// ── Projects / Portofolio ──
export async function getProjects(params = {}) {
  const data = await fetchJson('/projects', params);
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.data)) return data.data;
  return [];
}

export async function getProjectDetail(idOrSlug) {
  const data = await fetchJson(`/projects/${idOrSlug}`);
  return data;
}

// ── Team Members ──
export async function getTeamMembers() {
  const data = await fetchJson('/team-members');
  return Array.isArray(data) ? data : [];
}

// ── Blogs / Articles ──
export async function getBlogs(params = {}) {
  const data = await fetchJson('/blogs', params);
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.data)) return data.data;
  return [];
}

export async function getBlogDetail(idOrSlug) {
  const data = await fetchJson(`/blogs/${idOrSlug}`);
  return data;
}

export default {
  resolveImageUrl,
  getHeroBanners,
  getServices,
  getProjectCategories,
  getProjects,
  getProjectDetail,
  getTeamMembers,
  getBlogs,
  getBlogDetail,
};
