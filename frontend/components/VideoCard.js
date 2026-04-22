export default function VideoCard({ video }) {
  return (
    <div style={{ padding: 20, border: '1px solid #ddd', margin: 10 }}>
      <h4>{video?.title || 'Video'}</h4>
    </div>
  );
}
