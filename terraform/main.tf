provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "react_bucket" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_website_configuration" "react_website" {
  bucket = aws_s3_bucket.react_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_policy" "public_access" {
  bucket = aws_s3_bucket.react_bucket.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.react_bucket.arn}/*"
      }
    ]
  })
}


