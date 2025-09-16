import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload, X, File, Image, Video, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UploadedFile {
  file: File;
  id: string;
  preview?: string;
}

interface FileUploadProps {
  onFilesChange: (files: UploadedFile[]) => void;
  acceptedTypes?: string[];
  maxFiles?: number;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFilesChange,
  acceptedTypes = ['image/*', 'video/*', '.pdf', '.doc', '.docx', '.txt'],
  maxFiles = 10,
  className
}) => {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
    }));

    const updatedFiles = [...files, ...newFiles].slice(0, maxFiles);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  }, [files, maxFiles, onFilesChange]);

  const removeFile = (id: string) => {
    const updatedFiles = files.filter(f => f.id !== id);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedTypes.reduce((acc, type) => {
      acc[type] = [];
      return acc;
    }, {} as Record<string, string[]>),
    maxFiles: maxFiles - files.length,
    multiple: maxFiles > 1
  } as any);

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) return <Image size={16} />;
    if (fileType.startsWith('video/')) return <Video size={16} />;
    return <FileText size={16} />;
  };

  const getFileTypeBadge = (fileType: string) => {
    if (fileType.startsWith('image/')) return 'Image';
    if (fileType.startsWith('video/')) return 'Video';
    return 'Document';
  };

  return (
    <div className={cn('space-y-4', className)}>
      <div
        {...getRootProps()}
        className={cn(
          'border-2 border-dashed border-border/50 rounded-lg p-6 cursor-pointer transition-colors',
          'hover:border-primary/50 hover:bg-primary/5',
          isDragActive && 'border-primary bg-primary/10'
        )}
      >
        <input {...getInputProps()} />
        <div className="text-center">
          <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">
            {isDragActive
              ? 'Drop the files here...'
              : 'Drag & drop files here, or click to select'}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Images, videos, and documents supported (max {maxFiles - files.length} more)
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Uploaded Files</h4>
          <div className="grid gap-2">
            {files.map((fileObj) => (
              <Card key={fileObj.id} className="bg-card/30">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {fileObj.preview ? (
                        <img 
                          src={fileObj.preview} 
                          alt={fileObj.file.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                          {getFileIcon(fileObj.file.type)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {fileObj.file.name}
                        </p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {getFileTypeBadge(fileObj.file.type)}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {(fileObj.file.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(fileObj.id)}
                      className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                    >
                      <X size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { FileUpload, type UploadedFile };