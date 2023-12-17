const { Client } = require("pg");

// Connection string for your PostgreSQL database on Render
const connectionString =
  "postgres://learntok_e5yp_user:b4zd4c7QREi7tMy1lj2N6vDUUxppnBGZ@dpg-clvhqkla73kc73bpv0ng-a.frankfurt-postgres.render.com/learntok_e5yp";

// SQL code for creating tables
const createTablesSQL = `
    CREATE TABLE category (
        id SERIAL PRIMARY KEY,
        topic VARCHAR(50)
    );

    INSERT INTO category (topic) VALUES
        ('History'),
        ('Language'),
        ('Math'),
        ('Science'),
        ('Programming'),
        ('Art'),
        ('Gaming'),
        ('Health'),
        ('Geography'),
        ('Psychology'),
        ('Business');

    CREATE TABLE videos (
        video_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(100),
        url VARCHAR(200),
        category_id INT REFERENCES category(id),
        description VARCHAR(1000),
        poster_id VARCHAR(200),
        likes_count INTEGER DEFAULT 0
    );

    CREATE TABLE likes (
        like_id SERIAL PRIMARY KEY,
        likedBy VARCHAR(200),
        video_id UUID REFERENCES videos(video_id),
        CONSTRAINT fk_likes_video_id FOREIGN KEY (video_id) REFERENCES videos(video_id)
    );

    CREATE TABLE comments (
        comment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        userComment VARCHAR(1000),
        commenter_id VARCHAR(200),
        video_id UUID REFERENCES videos(video_id)
    );

    -- Create indexes separately in PostgreSQL
    CREATE INDEX idx_likes_on_video_id ON likes (video_id);
    CREATE INDEX idx_video_id ON videos (video_id);
    CREATE INDEX idx_title_video ON videos (title);
`;

const sslConfig = {
  rejectUnauthorized: false,
};

// Function to execute SQL queries
async function createTables() {
  const client = new Client({
    connectionString,
    ssl: sslConfig,
  });

  try {
    await client.connect();
    await client.query(createTablesSQL);
    console.log("Tables and indexes created successfully.");
  } catch (error) {
    console.error("Error creating tables and indexes:", error);
  } finally {
    await client.end();
  }
}

// Execute the function
createTables();
